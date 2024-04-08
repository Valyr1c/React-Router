import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);
  return (
    <div className=" text-center">
      <h1 className=" text-red-500 font-black">
        404 <span>not found :( </span>
      </h1>
      <p>I think you wanna enter our home page...</p>
    </div>
  );
}

export default ErrorPage;
