import star from '../../public/Star1.svg';
import starSm from '../../public/StarSm.svg';
import whiteStar from '../../public/whiteStar.svg';
import starMedium from '../../public/StarMedium.svg';

interface StarInt {
    rt?:string,
    t?:number
    r?:number
    l?:number
    b?:number
    sc?:number
}




export const Star = ({rt,t,r,l,b,sc}:StarInt) => {

    const style = {
        right:r,
        top:t,
        left:l,
        bottom:b,
        rotate:rt,
        scale:sc
    }


    return (
       <img src={star.src} alt={'star'} style={{...style,position:"absolute"}}/>
    );
};


export const StarSm = ({rt,t,r,l,b,sc}:StarInt) => {

    const style = {
        right:r,
        top:t,
        left:l,
        bottom:b,
        rotate:rt,
        scale:sc
    }


    return (
        <img src={starSm.src} alt={'star'} style={{...style,position:"absolute",zIndex:5}}/>
    );
};

export const StarWhite = ({rt,t,r,l,b,sc}:StarInt) => {

    const style = {
        right:r,
        top:t,
        left:l,
        bottom:b,
        rotate:rt,
        scale:sc
    }


    return (
        <img src={whiteStar.src} alt={'star'} style={{...style,position:"absolute",zIndex:15}}/>
    );
};

export const StarMedium = ({rt,t,r,l,b,sc}:StarInt) => {

    const style = {
        right:r,
        top:t,
        left:l,
        bottom:b,
        rotate:rt,
        scale:sc
    }


    return (
        <img src={starMedium.src} alt={'star'} style={{...style,position:"absolute",zIndex:15}}/>
    );
};