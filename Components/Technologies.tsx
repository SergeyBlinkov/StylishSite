import styles from "./Components.module.css";
import {H2,P,H4,Ellipse} from  './HelperComponents/StyledComponentsElement';
import angular from "../public/Components/Technologies/angular.png";
import react from "../public/Components/Technologies/react.png";
import vue from "../public/Components/Technologies/vue.png";
import java_script from "../public/Components/Technologies/javascript.png";


interface TechnologiesItemType {
    picture:string
    name:string
}

const TechnologiesItem = ({picture,name}:TechnologiesItemType) => {
    return <div className={styles.TechnologiesItem_background}>
        <section className={styles.TechnologiesItem}>
        <img src={picture} alt={name}/>
        <H4>{name}</H4>
    </section>
    </div>
}

const Technologies = () => {
    return (
        <div className={styles.Technologies}>\
            <section className={styles.Technologies_name}>
                <H2>Programming technologies</H2>
                <P> By the end, you’ll have the portfolio and interview skills you need to start your new career.</P>
            </section>
            <section className={styles.TechnologiesGroup}>
                <TechnologiesItem picture={angular.src} name={"Angular"}/>
                <TechnologiesItem picture={react.src} name={"React"}/>
                <TechnologiesItem picture={vue.src} name={"Vue"}/>
                <TechnologiesItem picture={java_script.src} name={"Javascript"}/>
            </section>
            <Ellipse style={{top:380,left:-40}} />
        </div>
    );
};

export default Technologies;