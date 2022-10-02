import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {

  
const token =localStorage.getItem("Token");
console.log(token)
  

const router= useRouter();
if (token){
  router.push("/Authenticate route  ")
}



  return(
    <>
     <Component {...pageProps} />

    
    </>
  )
}

export default MyApp
