import "@/styles/globals.css";
import 'flowbite';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={400} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  )
}
