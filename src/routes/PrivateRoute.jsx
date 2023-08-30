import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    debugger
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // authorized so return component
            return <Component {...props} />
        }} />
    );
}