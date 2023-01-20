import styles from './Components.module.css'
import LogoComponent from "./Header/LogoComponent";
import {P1,H4} from  './HelperComponents/StyledComponentsElement';
import Facebook from '../public/Components/Footer/Facebook.svg'
import Twitter from '../public/Components/Footer/Twitter.svg'
import Linkedin from '../public/Components/Footer/linkedin.svg'
import Gitlab from '../public/Components/Footer/Gitlab.svg'


const Footer = () => {
    return (
        <footer className={styles.Footer__background}>
            <div className={styles.Footer}>
                <section className={styles.Footer_LogoBlock}>
                    <LogoComponent />
                    <P1>Wisconsin Ave, Suite 700
                        Chevy Chase, Maryland 20815</P1>
                </section>
                <section className={styles.Footer_LinkBlock}>
                    <H4 className={styles.Footer_LinkBlock__name}>Company</H4>
                    <ul className={styles.Footer_LinkBlock__list}>
                        <li><P1>About Us</P1></li>
                        <li><P1>Review</P1></li>
                        <li><P1>FAQs</P1></li>
                        <li><P1>Gallery</P1></li>
                        <li><P1>Steps</P1></li>
                    </ul>
                </section>
                <section className={styles.Footer_SocialMedia}>
                    <H4 className={styles.Footer_SocialMedia__name}>Social Media</H4>
                    <ul className={styles.Footer_SocialMedia__list}>
                        <li><img src={Facebook.src} alt="Facebook"/></li>
                        <li><img src={Gitlab.src} alt="Gitlab"/></li>
                        <li><img src={Twitter.src} alt="Twitter"/></li>
                        <li><img src={Linkedin.src} alt="Linkedin"/></li>
                    </ul>
                </section>
            </div>

        </footer>
    );
};

export default Footer;