import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Player.module.css';

// Define the props of the component
interface Props {
    filmId: string | undefined;
}

// Create the component and memoize it
export const Player: FC<Props> = memo(() => {
    const { Id: filmId } = useParams();

    // useEffect hook to add and remove script to the page
    useEffect(() => {
//         document.addEventListener('wheel', () => {
//             
//         });
//         // Create a script element
//         const script = document.createElement('script');
//         script.src = 'http://kinoplayer.top/top.js';
// 
//         // Add the script element to the page
//         document.body.appendChild(script);

        // Remove the script element when the component is unmounted
        return () => {
           
        };//kinoplayer.top/top.js
    }, [filmId]);

    if (!filmId) return null;

    // Return the player markup with attributes
    return (
        <div className={styles.player__wrapper}>
            <div id="kinoplayertop" data-kinopoisk={filmId}></div>
            <script src="//kinoplayer.top/top.js"></script>
        </div>
    );
});
