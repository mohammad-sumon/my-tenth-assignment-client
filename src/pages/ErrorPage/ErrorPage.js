import React from "react";
import { Link } from "react-router-dom";
import DangerLogo from "../../assets/danger.png";
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="text-center">
        <div>
            <img src={DangerLogo} alt=""  className='danger-logo' />
        </div>
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          Sorry, we couldn't find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
