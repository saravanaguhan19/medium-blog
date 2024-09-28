import { Link } from "react-router-dom";

interface BlogCardType {
  name: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  id,
  name,
  title,
  content,
  publishedDate,
}: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex justify-center mt-3  ">
        <div className=" border-b pb-5  max-w-md  w-full">
          <div className="flex ">
            <Avatar name={name} />
            <div className="text-sm font-semibold pl-2 ">{name}</div>
            <div className=" flex items-center justify-center px-1 ">
              <div className="w-1 h-1 rounded-full bg-slate-500"></div>
            </div>
            <div className="text-sm font-thin">{publishedDate}</div>
          </div>
          <div className="font-bold text-2xl">{title}</div>
          <div className="text-sm font-light px-1">
            {content.length > 150 ? content.slice(0, 150) + "..." : content}
          </div>
          <div className="pl-4 text-sm font-thin pt-4">{`${Math.ceil(
            content.length / 100
          )} min read`}</div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }  overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300 `}
      >
        {name[0]}
      </span>
    </div>
  );
}
