
import {RefObject} from 'react';


export const ScrollTopPositionRef = (ref: RefObject<HTMLDivElement>) => {
    if(!ref.current) return;
    const skillTopPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: skillTopPosition - 90,
        behavior: 'smooth',
    });
}