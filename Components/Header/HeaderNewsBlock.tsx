import {H1, Ellipse,Button, P} from "../HelperComponents/StyledComponentsElement";
import styles from './Header.module.css'
import {Star, StarSm} from "../HelperComponents/Star";

const HeaderNewsBlock = () => {



    return <div  className={styles.HeaderNewsBlock}>
        <section className={styles.HeaderNewsBlock_textField} >
            <H1 className={styles.HeaderNewsBlock_textField__firstLine}>Front-End</H1>
            <P className={styles.HeaderNewsBlock_textField__text}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more)</P>
            <Button className={styles.HeaderNewsBlock_textField__button}>Start my career change</Button>
            <H1 className={styles.HeaderNewsBlock_textField__secondLine}>Developer</H1>
        </section>
        <Ellipse className={styles.HeaderNewsBlock__EllipseOne}/>
        <Ellipse className={styles.HeaderNewsBlock__EllipseTwo}/>
        <Star b={-350} r={-300}/>
        <StarSm b={-200} r={230}/>
        <StarSm b={-140} r={620}/>
        <StarSm b={-200} r={1020}/>
    </div>
}


export default HeaderNewsBlock