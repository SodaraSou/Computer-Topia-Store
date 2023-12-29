import { Link } from "react-router-dom";
import PageNotFound from "../assets/img/404.png";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <img
        src={PageNotFound}
        alt="page-not-found"
        className="w-[400px] h-[300px]"
      />
      <Link
        to="/"
        className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
      >
        Go Back
      </Link>
    </div>
  );
}

export default NotFoundPage;
