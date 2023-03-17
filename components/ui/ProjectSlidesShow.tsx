import {FC} from 'react';
import { Slide, Zoom } from 'react-slideshow-image';
import styles from './ProjectSlidesShow.module.css';
import "react-slideshow-image/dist/styles.css";
import { Box } from '@mui/material';

interface Props {
    images: string[];
}
// const indicators = (index:any) => (<div className={styles.indicator}>{index +1 }</div>);

export const ProjectSlidesShow = ({images}:Props) => {
    return (
        <Box className={styles.indicator}>

            <Slide
                easing='ease'
                duration={2500}
                indicators={true}
                autoplay={true}
                arrows={true}
                
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

        </Box>
        
    )
}
