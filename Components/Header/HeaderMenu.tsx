
import styles from './Header.module.css'
import LogoComponent from "./LogoComponent";

const HeaderMenu = () => {
    return (
        <nav className={styles.HeaderMenu}>
            <LogoComponent />
            <ul className={styles.HeaderMenu_list}>
                <li>About</li>
                <li>Programs</li>
                <li>Steps</li>
                <li>Questions</li>
                <li>Get in touch</li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;