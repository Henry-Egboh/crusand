import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return ( 
        <header className="error-page">
        <div>
        <h1>Oops...!</h1>
        <p>An unexpected error has occured.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
        </header>
     );
}
 
export default ErrorPage;