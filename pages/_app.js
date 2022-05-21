import Template from '../components/shared/Template'
import { StarredProvider } from '../context/starredContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StarredProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </StarredProvider>
  )
}

export default MyApp
