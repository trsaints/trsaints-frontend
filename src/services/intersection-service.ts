import {useEffect, useRef} from 'react'

const globalObserverContext = new Map<number, IntersectionObserver>()

function hasThreshold(threshold: number) {
    return globalObserverContext.has(threshold)
}

function addObserverToContext(threshold: number, animationName: string) {
    const observer = getIntersectionObserver(threshold, animationName)
    globalObserverContext.set(threshold, observer)
}

function getIntersectionObserver(threshold: number, animationName: string) {
    const observer = new IntersectionObserver(
        (entries) => setObserverEntries(entries, observer, animationName),
        getOptions(threshold)
    )

    return observer
}

function setObserverEntries(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    animationName: string
) {
    entries.forEach((entry) =>
                        updateEntryClassList(entry, observer, animationName)
    )
}

function updateEntryClassList(
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
    animationName: string
) {
    if (!entry.isIntersecting)
        return

    entry.target.classList.add(animationName)
    observer.unobserve(entry.target)
}

function getOptions(threshold: number) {
    return {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
    }
}

function useIntersectionObserver(threshold: number, animationName: string) {
    const ref = useRef<Element>()

    useEffect(() => {
        if (!hasThreshold(threshold))
            addObserverToContext(threshold, animationName)

        const observer     = globalObserverContext.get(threshold)
        const isCurrentRef = (ref.current !== undefined)

        if (!isCurrentRef || !observer) return

        observer.observe(ref.current!)
        return () => observer.unobserve(ref.current!)
    }, [threshold, animationName])

    return ref
}

export const intersectionService = {
    useIntersectionObserver,
}
