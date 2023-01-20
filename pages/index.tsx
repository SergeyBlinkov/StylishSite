import styles from '../styles/mainPage.module.css'
import Header from "../Components/Header/Header";
import About from "../Components/About";
import Technologies from "../Components/Technologies";
import Steps from "../Components/Steps";
import Faq from "../Components/FAQ";
import Review from "../Components/Review";
import Gallery from "../Components/Gallery";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
const App = () => {
  return <div className={styles.mainPage}>
      <Header />
      <About />
      <Technologies />
      <Steps />
      <Faq />
      <Review />
      <Gallery />
      <ContactUs />
      <Footer />
  </div>
}
export default App