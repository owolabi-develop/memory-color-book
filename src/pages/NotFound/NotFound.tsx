import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          404 Error
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
            The page you requested could not be found. It may have been moved, renamed,
            or is no longer available.
            </p>


        <div className="mt-8 flex items-center justify-center gap-x-2">
          <Link
            to="/"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
          >
            Go back home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
