import { SignIn } from "@clerk/clerk-react"
import {Grid, Paper} from '@mui/material';

import actualize from '@/assets/images/actualize.jpg'
export default function SignInPage() {

    console.log({
        actualize

    })
    return (

        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    padding: '10%',
                    backgroundImage: `url(${actualize})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </Grid>
            <Grid
                xs={12} sm={8} md={5} component={Paper} elevation={6} square
            item
            sx={{
                padding: '10%'
            }}
            >
                <SignIn
                    sx={{ height: '100vh' }}
                />;
            </Grid>
        </Grid>


    )
}


{/* <Box*/}
{/*    height="100%"*/}
{/*    width="100%"*/}
{/*    mt="10%"*/}
{/*    display="flex"*/}
{/*    alignItems="center"*/}
{/*    justifyContent="center"*/}
{/*>*/}
{/*    <img*/}
{/*        src={actualize}*/}
{/*        alt='Me'*/}
{/*        width='100%'*/}
{/*        height='100%'*/}
{/*    />*/}
{/*    <SignIn/>;*/}
{/*</Box>*/}