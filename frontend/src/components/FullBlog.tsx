import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full  max-w-screen-xl pt-10  ">
          <div className=" col-span-12  lg:col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd Dec 2023</div>
            <div className="pt-4">{blog.content}</div>
          </div>

          <div className="col-span-12 mt-12 lg:col-span-4 lg:mt-0 ">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex">
              <div className="pr-4 flex justify-center flex-col">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500 pt-2">
                  Random catch phrase about the author's ability to grab the
                  user's attenion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
