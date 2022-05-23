import Template from '../components/shared/Template'
import { SearchProvider } from '../context/searchContext'
import { StarredProvider } from '../context/starredContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Template>
        <StarredProvider>
          <Component {...pageProps} />
        </StarredProvider>
      </Template>
    </SearchProvider>
  )
}

export default MyApp
