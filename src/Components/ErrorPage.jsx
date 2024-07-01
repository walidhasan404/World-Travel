import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='p-10 text-center'>
            <img className="mx-auto mb-6" src="https://i.ibb.co/4WzZbgT/8e46bdb292729008057870117bb1358a.jpg" alt="" />
            <p className="text-xl font-semibold">404 not found!</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;