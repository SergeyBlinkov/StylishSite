import styles from './Components.module.css';
import {H2,P,H3,H4,Ellipse} from './HelperComponents/StyledComponentsElement';
import line from '../public/Components/Steps/line.svg';
import verticalLine from '../public/Components/Steps/verticalLine.svg';
import {StarMedium, StarSm} from "./HelperComponents/Star";

interface StepsType {
    name:string
    text:string
    index:number
}

const init = [
    {
        name:"Introduction to Front-End",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        name:"Overview of Development",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        name:"Introduction to Front-End",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        name:"Overview of Development",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        name:"Introduction to Front-End ",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        name:"Overview of Development",
        text:"Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
]

export const StepsItem = ({name,text,index}:StepsType) => {
    const checker = index % 2 === 1
    const AddStyle = checker ? styles.StepsSecondLine : null
    const stepChecker = !checker ? `${styles.oneStep} ${styles.StepsGradient}` : `${styles.oneStepSecondLine} ${styles.StepsGradientSecondLine}`
    return <div className={` ${AddStyle} ${stepChecker}`}>
        <section className={styles.StepsItem}>
            <img src={line.src} alt="lineArrow" className={styles.StepsItem__arrowLine}/>
            <H4>Step {index + 1}</H4>
            <H3>{name}</H3>
            <P>{text}</P>
    </section>
    </div>
}


const Steps = () => {
    return (
        <div className={styles.Steps}>
            <H2>Steps</H2>
            <div className={styles.Steps_block}>
                <img src={verticalLine.src} alt="vertical-line" className={styles.Steps_block__vertical_line}/>
                <div className={styles.Steps_block__items}>
                    {init.map((items,index) => (
                    <StepsItem name={items.name} text={items.text} index={index} key={index}/>
                ))}
                </div>
            </div>
            <Ellipse style={{top:300,left:50}}/>
            <StarMedium l={250} t={10}/>
            <StarMedium r={-70} t={450}/>
            <StarSm l={20} t={450}/>
            <StarSm r={350} t={610}/>
            <StarSm t={845} r={100}/>
        </div>
    );
};

export default Steps;