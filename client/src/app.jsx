
import { Auth0Provider } from "@auth0/auth0-react"
import LoginButton from "./components/loginButton/loginButton"

const App = () => {
    return (
        <Auth0Provider
                domain="dev-l5xbspgssl2tac4r.us.auth0.com"
                clientId="mU26hXOUQcoDFLiqxmss4mcxcGYUe3BN"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <LoginButton/>

          </Auth0Provider>
    )
}

export default App