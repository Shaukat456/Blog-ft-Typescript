import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {


const router= useRouter();
if ('/'){
  router.push("/something ")
}


  return(
    <>
     <Component {...pageProps} />

    
    </>
  )
}

export default MyApp
