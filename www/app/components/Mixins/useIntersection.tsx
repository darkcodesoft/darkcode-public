import { useState, useEffect, MutableRefObject } from 'react'

export function useIntersection (element:MutableRefObject<HTMLElement|null>, margin: number) {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const el = element.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin: `${margin}px` }
        );

        element.current && observer.observe(element.current);

        if (el) {
            return () => observer.unobserve(el);
        }
    }, [isVisible, setState, element, margin]);

    return isVisible;
};

