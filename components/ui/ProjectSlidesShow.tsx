import {FC} from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './ProjectSlidesShow.module.css';
import "react-slideshow-image/dist/styles.css";

interface Props {
    images: string[];
}

export const ProjectSlidesShow = ({images}:Props) => {
    return (
        <Slide
            easing='ease'
            duration={3000}
            indicators={false}
            autoplay={true}
            arrows={false}
            
        >

            {
                images.map(image => {
                    const url = `/projects/${image}`;
                    return (
                        <div className={styles['each-slide']} key={image}>
                            <div style={{backgroundImage: `url(${url})`, backgroundRepeat:'no-repeat'}}>

                            </div>
                        </div>
                    )
                })
            }
        </Slide>
    )
}
