import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center flex-col">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Appbar />
      </div>

      <div>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            name={blog.author.name || "Anonymous"}
            publishedDate="2nd Feb 2024"
            title={blog.title}
            content={blog.content}
          />
        ))}
        {/* <BlogCard
          name="Saravana Guhan"
          publishedDate="2nd Feb 2024"
          title="How an ugle single page website make $5000 with affilated marketing"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                deserunt a facere autem tempore repudiandae doloribus, consectetur,
                laudantium reiciendis nemo perspiciatis expedita inventore veritatis
                natus eius nesciunt. Repudiandae, incidunt quo?
                "
        /> */}
      </div>
    </div>
  );
};
