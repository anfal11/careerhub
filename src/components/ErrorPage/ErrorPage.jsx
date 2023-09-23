import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div  className="max-w-7xl mx-auto text-center mt-20">
      <p className="text-2xl font-semibold">Oops.. This route is still under development. Please check back later.</p>
      <div className="mt-20">
        <Link to="/"><button className="btn">Go Back</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
