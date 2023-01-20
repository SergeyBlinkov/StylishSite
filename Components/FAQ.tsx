import styles from './Components.module.css';
import {H4,H2,P,Ellipse} from './HelperComponents/StyledComponentsElement';
import questionmark from '../public/Components/FAQ/questionmark2.png';
import {StarMedium, StarSm} from "./HelperComponents/Star";
import plus from '../public/Components/FAQ/plus.svg';
import minus from '../public/Components/FAQ/minus.png';
import {useState} from "react";

interface FaqBlockType {
    title:string
    text?:string
    isShow:boolean
}

export const FaqBlockItem = ({title,text,isShow}:FaqBlockType) => {
    const [openBlock,setOpenBlock] = useState(isShow)
    return <section className={`${styles.FaqBlockItem} ${openBlock && styles.FaqOpenBlock} `}>
        <H4>{title}</H4>
        {<P>{text}</P>}
        <button onClick={() => setOpenBlock(!openBlock)} className={styles.FaqBlockItem__button}>{!openBlock ? <img src={plus.src} alt={'plus'}/>: <img src={minus.src} alt={'minus'}/> }</button>
    </section>
}

const Faq = () => {
    return (
        <div className={styles.FAQ}>
            <H2>Frequently Asked Questions</H2>
            <div className={styles.FAQ_block}>
                <figcaption className={styles.FAQ_questionMark}>
                    <P className={styles.FAQ_questionMark__text}>Do you have any kind of questions? We are here to help.</P>
                    <img src={questionmark.src} alt={'questionmark'} className={styles.FAQ_questionMark__img} width={344}
                    height={405}/>
                </figcaption>
                <div className={styles.FAQ_blockItems}>
                    <FaqBlockItem isShow={true} title={"What is the price?"} text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."}/>
                    {Array.from(Array(4)).map((_,index) => (
                        <FaqBlockItem isShow={false} title={"What is the price?"} text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."} key={index}/>
                    ))}
                </div>
            </div>
            <Ellipse style={{top:50,right:-150}}/>
            <Ellipse style={{bottom:-200,left:0}}/>
            <StarMedium l={140} b={110}/>
            <StarSm r={350} b={20}/>
        </div>
    );
};

export default Faq;