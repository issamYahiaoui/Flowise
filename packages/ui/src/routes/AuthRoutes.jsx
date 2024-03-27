import { lazy } from 'react'

// project imports
import Loadable from '@/ui-component/loading/Loadable'
import MinimalLayout from "@/layout/MinimalLayout";

// Signin routing
const Signin = Loadable(lazy(() => import('@/views/signin')))

// Signup routing
const Signup = Loadable(lazy(() => import('@/views/signup')))

// ==============================|| MAIN ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [

        {
            path: '/sign-in',
            element: <Signin />
        },
        {
            path: '/sign-up',
            element: <Signup />
        },

    ]
}

export default AuthRoutes
