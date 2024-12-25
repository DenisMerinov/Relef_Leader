import classNames from 'classnames'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { InternetConnectionChecker } from 'shared/ui/InternetConnectionChecker/InternetConnectionChecker'
import { StyleProvider, GlobalStyles } from './styles'
import { AppRouter } from './providers/router'

const App = () => (
    <div className={classNames('app', {}, [])}>
        <StyleProvider>
            <GlobalStyles />
            <InternetConnectionChecker>
                <div className={classNames('app')}>
                    <div className="content-page">
                        <Navbar />
                        <AppRouter />
                        <Footer />
                    </div>
                </div>
            </InternetConnectionChecker>
        </StyleProvider>
    </div>
)

export default App
