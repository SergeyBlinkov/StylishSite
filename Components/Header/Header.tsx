import styles from './Header.module.css'
import backgroundHead from '../../public/Header/backgroundHead.png'
import HeaderNewsBlock from "./HeaderNewsBlock";
import Head from "next/head";
import HeaderMenu from "./HeaderMenu";


const Header = () => {
    return <div className={styles.background_Header}>
        <div className={styles.Header}>
        <Head>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');
            </style>
        </Head>
        <HeaderMenu />
        <img src={backgroundHead.src} alt={'bgPic'} className={styles.Header_img} />
        <HeaderNewsBlock />
    </div>

    </div>
}

export default Header