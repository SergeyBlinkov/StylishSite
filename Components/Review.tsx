import styles from './Components.module.css';
import {H4, H2, P, Ellipse} from './HelperComponents/StyledComponentsElement';
import man1 from '../public/Components/Review/man1.png'
import man2 from '../public/Components/Review/man2.png'
import woman1 from '../public/Components/Review/woman1.png'
import arrowRight from '../public/Components/Review/arrowRight.svg';
import arrowLeft from '../public/Components/Review/ArrowLeft.svg';
import woman1184 from '../public/Components/Review/woman1184.png'
import man1184 from '../public/Components/Review/man1184.png'
import man2184 from '../public/Components/Review/man2184.png'
import ButtonArrow from "./HelperComponents/ButtonArrow";
import React, {useEffect, useState} from "react";
import {StarMedium} from "./HelperComponents/Star";

interface PictureType {
    w?: number | false
    h?: number | false
    p: string,
    r:number,
    className:boolean
}



interface DATA_Type {
    name: string,
    text: string,
    picture: string[]
}

const DATA_REVIEW: DATA_Type[] = [{
    name: "Best courses ever",
    text: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the\n" +
        "                    \"teacher\" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check\n" +
        "                    back etc.",
    picture: [man1.src,man1184.src]
},
    {
        name: "Amazing teaching",
        text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
        picture: [woman1.src,woman1184.src]
    },
    {
        name: "Simple and easy",
        text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
        picture: [man2.src,man2184.src]
    }]


const PictureBlock = ({w, h, p,r,className}: PictureType) => {

    const width = w ? w : 184
    const height = h ? h : 422
    const nW = width / 5
    const nH = height / 5
    const greaterNumber = nW > nH ? nH : nW
    const styleObject = {
        width,
        height,
        clipPath: `polygon(0 0, 100% 0, 100% ${(height - greaterNumber) - 2}px, ${(width - greaterNumber) - 2}px 100%, 0 100%)`,
        clipPath2: `polygon(0 0, 100% 0, 100% ${(height - greaterNumber) + 1}px, ${(width - greaterNumber) + 1}px 100%, 0 100%)`,
    }

    return <div className={`${styles.TechnologiesItem_background} ${className && styles.ReviewSwipe__main}`}
                style={{width: styleObject.width, height: styleObject.height, clipPath: styleObject.clipPath2,transform:`translateX(${r}px)`}}>
        <div className={styles.TechnologiesItem} style={{clipPath: styleObject.clipPath}}>
            <img src={p} alt={p}/>
        </div>
    </div>
}

const ReviewSwipe = () => {
    const [number, setNumber] = useState(0)
    const zero = number === 0
    const one = number === 1
    const two = number === 2
    const arr = [0,1,2]
    const imgPos = [{
        id:0,
        zero:-426,
        one:-218,
        two:-10
    },{
        id:1,
        zero:-218,
        one:-426,
        two:-10
    },{
        id:2,
        zero:-218,
        one:-10,
        two:-426
    }
    ]
    const img = arr.filter((item) => item !== number)
    useEffect(() => {
        const text = document?.getElementById("text")
        if(!text) return
        text.style.transition = 'none'
        text.style.opacity = "0"
        timeoutFunc(text)
    },[number])
    const timeoutFunc = (text:HTMLElement) => setTimeout(() => {
                console.log('sec')
                text.style.transition = "opacity 1s"
                 return text.style.opacity = "1"
            },200)
    const IncOrDec = (type: string) => {
        if (type === "increment") {
            if (number + 1 === DATA_REVIEW.length) {
                return setNumber(0)
            }
            return setNumber((prev) => (prev + 1))
        }
        if (type === "decrement") {
            if (number - 1 === -1) {
                return setNumber(DATA_REVIEW.length - 1)
            }
            return setNumber((prev) => prev - 1)
        } else return null
    }
    return  (
             <div className={styles.ReviewSwipe}>
                    <section className={styles.ReviewSwipe_text} id={"text"} key={'text'}>
                        <H4>{DATA_REVIEW[number].name}</H4>
                        <P>{DATA_REVIEW[number].text}</P>
                    </section>
                <section className={styles.ReviewSwipe_block}>
                    <div className={styles.ReviewSwipe_block__ArrowBlock}>
                        <p>{number + 1}/ <span>{DATA_REVIEW.length}</span></p>
                        <div className={styles.ArrowBlock}>
                            <ButtonArrow onClick={() => IncOrDec('decrement')}><img src={arrowLeft.src}
                                                                                    alt="arrowLeft"/></ButtonArrow>
                            <ButtonArrow onClick={() => IncOrDec('increment')}><img src={arrowRight.src}
                                                                                    alt={'arrowRight'}/></ButtonArrow>
                        </div>
                    </div>
                    <section className={styles.ReviewSwipe_block__PictureBlock}>
                        <PictureBlock
                            w={zero && 392}
                            h={zero && 422}
                            p={DATA_REVIEW[zero ? number : img[0]].picture[zero ? 0 : 1]}
                            r={imgPos[number].zero}
                            className={zero}/>
                        <PictureBlock
                            w={one && 392}
                            h={one && 422}
                            p={DATA_REVIEW[one ? number : img[zero?0:1]].picture[one ? 0 : 1]}
                            r={imgPos[number].one}
                            className={one}/>
                        <PictureBlock
                            w={two && 392}
                            h={two && 422}
                            p={DATA_REVIEW[two ? number : img[1]].picture[two ? 0 : 1]}
                            r={imgPos[number].two}
                            className={two}/>
                    </section>
                </section>

            </div>)

}

const Review = () => {
    return (
        <div className={styles.Review}>
            <H2 className={styles.Review__name}>Review</H2>
            <ReviewSwipe />
            <StarMedium r={-50} t={300}/>
            <Ellipse style={{top:200,right:-150}}/>
        </div>
    );
};

export default Review;