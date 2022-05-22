import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import { wrapper } from '../store'
import { setTitle } from '../store/reducers/app'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Navigation>
            <Component {...pageProps} />
        </Navigation>
    )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async () => {
    store.dispatch(setTitle('Server set this Title to Redux'))
        
    return {
        pageProps: { }
    }
})

export default wrapper.withRedux(MyApp)
