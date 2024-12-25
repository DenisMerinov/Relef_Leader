import { ReactComponent as LogoSVG } from 'shared/assets/icons/logo.svg'
import { AppLink } from '../AppLink/AppLink'

export const Logo = () => (
    <AppLink to="/">
        <LogoSVG />
    </AppLink>
)
