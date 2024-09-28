import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="flex justify-between px-10 border-b py-1">
      <Link
        to={"/blogs"}
        className=" font-semibold flex justify-center flex-col cursor-pointer"
      >
        <div>Medium</div>
      </Link>

      <div className="flex ">
        <Link to={"/publish"}>
          <button
            type="button"
            className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            New Blog
          </button>
        </Link>

        <Avatar name="Saravana" size={"big"} />
      </div>
    </div>
  );
};
