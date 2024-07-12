import {useEffect, useRef, MutableRefObject} from 'react'

const globalObserverContext = new Map<number, IntersectionObserver>()

function addAnimation(entry: IntersectionObserverEntry, animationName: string) {
    entry.target.classList.add(animationName)
}

function hasThreshold(threshold: number) {
    return globalObserverContext.has(threshold)
}

function addObserverToContext(
    threshold: number,
    callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
    const observer = getIntersectionObserver(threshold, callback)
    globalObserverContext.set(threshold, observer)
}

function getIntersectionObserver(
    threshold: number,
    callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
    const observer = new IntersectionObserver(
        (entries) => setObserverEntries(entries, observer, callback),
        getOptions(threshold)
    )

    return observer
}

function setObserverEntries(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
    entries.forEach((entry) =>
        triggerEntryCallback(entry, observer, callback)
    )
}

function triggerEntryCallback(
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
    callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
    if (!entry.isIntersecting)
        return

    callback(entry, observer)
    observer.unobserve(entry.target)
}

function getOptions(threshold: number) {
    return {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
    }
}

function useIntersectionObserver<T extends Element>(
    threshold: number,
    callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
): MutableRefObject<T | null> {
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const {current} = ref

        if (!hasThreshold(threshold))
            addObserverToContext(threshold, callback)

        const observer  = globalObserverContext.get(threshold)
        const refExists = (current !== undefined)

        if (!refExists || !observer) return

        observer.observe(current!)

        return () => observer.unobserve(current!)
    }, [threshold, callback])

    return ref
}

export const intersectionService = {
    useIntersectionObserver,
    addAnimation
}