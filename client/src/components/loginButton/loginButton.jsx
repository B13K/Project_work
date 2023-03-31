
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();


    return(
        <div>
            {!isAuthenticated &&<button onClick={() => loginWithRedirect()}>Login</button>}
            <h1>{JSON.stringify(user)}</h1>
            {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button>}
        </div>

    )
}

export default LoginButton