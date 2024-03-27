import { Link } from 'react-router-dom'

// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from '@/config'
import Logo from '@/ui-component/extended/Logo'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        {/*<Logo />*/}
       <h3> Actualize Lab - Mira</h3>

    </ButtonBase>
)

export default LogoSection
