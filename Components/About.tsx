import {H2,P,H3,H4,Ellipse} from './HelperComponents/StyledComponentsElement';
import styles from './Components.module.css';
import WadeWarren from '../public/Components/Mentors/WadeWarren.svg';
import KristinWatson from '../public/Components/Mentors/KristinWatson.svg';
import RobertFox from '../public/Components/Mentors/RobertFox.svg';
import MentorsLine from '../public/Components/Mentors/MentorsLine.svg';
import {Star, StarSm, StarWhite} from "./HelperComponents/Star";
interface AboutPictureType {
    text:string
    name:string
    picture:string
}

const About = () => {
    const AboutPictureItem = ({text,name,picture}:AboutPictureType) => {
        const checker = (name === "Wade Warren" || name === "Robert Fox") ? styles.SideMentor : null
        return <div className={`${styles.AboutPictureItem} ${checker}`}>
            <div className={styles.AboutPictureItem__img}>
                <img src={picture} alt={name} className={styles.AboutPictureItem__picture} />
            </div>
            <H4>{name}</H4>
            <P>{text}</P>
        </div>

    }

    return <div className={styles.About}>
        <H2>AboutUs</H2>
        <div className={styles.About_block}>
            <div className={styles.Mentors}>
                <H3>Mentors</H3>
                <img src={MentorsLine.src} alt={'mentorsLine'} className={styles.MentorLineImg}/>
                <section className={styles.Mentors_block}>
                    <AboutPictureItem name={"Wade Warren"} text={'Front-end engineers work closely with designers'} picture={WadeWarren.src}/>
                    <AboutPictureItem text={"Front-end engineers work closely with designers"} name={"Kristin Watson"} picture={KristinWatson.src}/>
                    <AboutPictureItem text={"Front-end engineers work closely with designers"} name={"Robert Fox"} picture={RobertFox.src}/>
                    <StarWhite l={-15} t={105}/>
                </section>
            </div>
            <P>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</P>

        </div>
        <Ellipse style={{bottom:-250,right:-100}}/>
        <Star r={-50} b={-350}/>
        <StarSm r={300} b={-100}/>
        <StarSm r={400} b={50}/>
    </div>
}


export default About;