import { useEffect } from 'react';
import '../styles/globals.css'
// import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  // Hide splash screen shen we are server side 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    }
  }, []);

  // const router = useRouter()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   window.onpopstate = () => {
  //     router.reload()
  //   }
  // },[router])

  return <Component {...pageProps} />
}

export default MyApp
