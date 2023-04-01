
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import Layout from "./components/Layout/Layout.jsx"

const App = () => {
    return (
        <Auth0Provider
                domain="dev-l5xbspgssl2tac4r.us.auth0.com"
                clientId="mU26hXOUQcoDFLiqxmss4mcxcGYUe3BN"
                authorizationParams={{
                    audience:"B13k es lo unico que se me ocurrio",
                    redirect_uri: window.location.origin,
                }}
            >
                <Layout/>

          </Auth0Provider>
    )
}

export default App