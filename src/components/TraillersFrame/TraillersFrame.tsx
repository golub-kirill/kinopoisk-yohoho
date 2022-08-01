import React, { useEffect } from 'react';

export const TraillersFrame = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://unpkg.com/@ungap/custom-elements-builtin';
        script1.defer = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.type = 'module';
        script2.src = 'https://unpkg.com/x-frame-bypass';
        script2.defer = true;
        document.body.appendChild(script2);
    }, []);

    return (
        <iframe
            title="traillers-frame"
            is="x-frame-bypass"
            src="https://widgets.kinopoisk.ru/discovery/trailer/167560?onlyPlayer=1&autoplay=1&cover=1"
            width="500"
            height="500"></iframe>
    );
};
