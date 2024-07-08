import {useEffect, useRef} from 'react'

const globalObserverContext = new Map()

function hasThreshold(threshold) {
    return globalObserverContext.has(threshold)
}

function addObserverToContext(threshold, animationName) {
    const observer = getIntersectionObserver(threshold, animationName)
    globalObserverContext.set(threshold, observer)
}

function getIntersectionObserver(threshold, animationName) {
    const observer = new IntersectionObserver(
        (entries) => setObserverEntries(entries, observer, animationName),
        getOptions(threshold)
    )

    return observer
}

function setObserverEntries(entries, observer, animationName) {
    entries.forEach((entry) =>
        updateEntryClassList(entry, observer, animationName)
    )
}

function updateEntryClassList(entry, observer, animationName) {
    if (entry.isIntersecting) {
        entry.target.classList.add(animationName)
        observer.unobserve(entry.target)
    }
}

function getOptions(threshold) {
    return {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
    }
}

function useIntersectionObserver(threshold, animationName) {
    const ref = useRef()

    useEffect(() => {
        if (!hasThreshold(threshold))
            addObserverToContext(threshold, animationName)

        const observer = globalObserverContext.get(threshold),
            isCurrentRef = ref.current !== undefined

        if (!isCurrentRef) return

        observer.observe(ref.current)
        return () => observer.unobserve(ref.current)
    }, [threshold, animationName])

    return ref
}

export const intersectionService = {
    useIntersectionObserver,
}
