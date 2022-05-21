import Template from '../components/shared/Template'
import { StarredProvider } from '../context/starredContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Template>
      <StarredProvider>
        <Component {...pageProps} />
      </StarredProvider>
    </Template>
  )
}

export default MyApp
