import { useRouteError } from "react-router-dom";

const Error = () => {
    //To actually print the errors with status and other info
    const err = useRouteError();
    return (
        <div>
            <img className="m-10" src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp" />
            <p>{err}</p>
        </div>
    )
}

export default Error;