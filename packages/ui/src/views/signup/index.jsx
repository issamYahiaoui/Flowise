import { SignUp} from "@clerk/clerk-react"
import {Box} from "@mui/material";

export default function SignUpPage() {
    return   <Box
        height="100%"
        width="100%"
        mt="10%"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <SignUp />;
    </Box>
}