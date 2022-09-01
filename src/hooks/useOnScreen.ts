import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function useOnScreen(ref: React.RefObject<any>) {

    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    );

    useEffectOnce(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect(); };
    });

    return isIntersecting;
}