import styles from './Components.module.css'
import {H2,P,Ellipse} from  './HelperComponents/StyledComponentsElement';
import picture1 from '../public/Components/Gallery/picture1.png'
import picture2 from '../public/Components/Gallery/picture2.png'
import picture3 from '../public/Components/Gallery/picture3.png'
import picture4 from '../public/Components/Gallery/picture4.png'
import {Star, StarSm} from "./HelperComponents/Star";


const Gallery = () => {
    return (
        <div className={styles.Gallery}>
            <H2>Gallery</H2>
            <section className={styles.Gallery_block}>
                <P className={styles.Gallery_block__text1}>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </P>
                <img src={picture1.src} alt={'picture1developer'} className={styles.Gallery_block__picture1}/>
                <img src={picture2.src} alt={'picture2developer'} className={styles.Gallery_block__picture2}/>
                <img src={picture4.src} alt={'picture4developer'} className={styles.Gallery_block__picture4}/>
                <img src={picture3.src} alt={'picture3developer'} className={styles.Gallery_block__picture3}/>
                <P className={styles.Gallery_block__text2}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</P>
            </section>
            <Star r={200} b={-50}/>
            <StarSm b={-20} r={540}/>
            <StarSm b={-100} l={200}/>
            <Ellipse style={{left:-50,bottom:0}}/>
            <Ellipse style={{right:-50,bottom:-280}}/>
        </div>
    );
};

export default Gallery;