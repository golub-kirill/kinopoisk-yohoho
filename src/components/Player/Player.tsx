import React, { FC, memo, useEffect, useRef, useState } from 'react';

import styles from './Player.module.css';

// Define the props of the component
interface Props {
    filmId: string | undefined;
    imdbId: string | undefined;
}

// Create the component and memoize it
export const Player: FC<Props> = memo(({ filmId, imdbId }) => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // useEffect hook to add and remove script to the page
    useEffect(() => {
        // If there is no data, do nothing
        if (!filmId || !imdbId) return;

        // Create a script element
        const script = document.createElement('script');
        script.src = '//yohoho.cc/yo.js';
        script.async = true;

        // Add the script element to the page
        document.body.appendChild(script);

        // Add ID attributes to the player element
        videoRef.current?.setAttribute('data-kinopoisk', filmId);
        videoRef.current?.setAttribute('data-imdb', imdbId);

        // Remove the script element when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, [filmId, imdbId]);

//     useEffect(() => {
//         const video = videoRef.current;
//         if (!video) return;
// 
//         const handleTimeUpdate = () => {
//             setCurrentTime(video.currentTime);
//             console.log(currentTime);
//         };
// 
//         video.addEventListener('timeupdate', handleTimeUpdate);
// 
//         // return () => {
//         //     video.removeEventListener('timeupdate', handleTimeUpdate);
//         // };
//     }, [videoRef.current]);

    // If there is no data, return null
    if (!filmId || !imdbId) return null;

    // Return the player markup with attributes
    return (
        <div className={styles.player__wrapper}>
            {filmId ? (
                <video
                    id="yohoho"
                    ref={videoRef}
                    data-kinopoisk={filmId}
                    controls>
                    <source src="//yohoho.cc/yo.mp4" type="video/mp4" />
                </video>
            ) : (
                <video
                    id="yohoho"
                    ref={videoRef}
                    data-player="videospider"
                    data-imdb={imdbId}
                    controls>
                    <source src="//yohoho.cc/yo.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    );
});
