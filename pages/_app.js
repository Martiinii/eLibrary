import Template from '../components/shared/Template'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}

export default MyApp
