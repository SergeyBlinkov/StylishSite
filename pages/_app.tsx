import '../styles/mainPage.module.scss'
import type { AppProps } from 'next/app'
import '../styles/style.css'
import {Provider} from "react-redux";
import {store} from "../Redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
