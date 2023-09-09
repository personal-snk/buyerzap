import { Route, Redirect } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}