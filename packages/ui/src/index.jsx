import React from 'react'
import App from '@/App'
import { store } from '@/store'
import { createRoot } from 'react-dom/client'

// style + assets
import '@/assets/scss/style.scss'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import ConfirmContextProvider from '@/store/context/ConfirmContextProvider'
import { ReactFlowContext } from '@/store/context/ReactFlowContext'

import { ClerkProvider } from '@clerk/clerk-react'


const container = document.getElementById('root')
const root = createRoot(container)


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider>
                    <ConfirmContextProvider>
                        <ReactFlowContext>
                            <ClerkProvider
                                afterSignInUrl={"/"}
                                afterSignUpUrl={"/"}
                                signInUrl={"/sign-in"}
                                signUpUrl={"/sign-up"}
                                supportEmail={"support@actualize.ae"}
                                publishableKey={PUBLISHABLE_KEY}
                            >
                            <App />
                            </ClerkProvider>
                        </ReactFlowContext>
                    </ConfirmContextProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
