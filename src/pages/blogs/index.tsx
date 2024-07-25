import Layout from "@/layouts/Layout";
import { useDataService } from "@/data/DataService";
import BlogCard from "@/components/BlogCard";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Page() {
  const { blogs } = useDataService();
  const [details, setDetails] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isMobile) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  }, [isMobile]);

  return (
    <Layout>
      <div className="mb-10 mt-10">
        <h1 className="text-4xl font-medium">Blogs</h1>
        <p className="mt-3 text-sm">
          Sharing knowledge can reinforce our understanding and contribute to
          the broader community
        </p>
      </div>
      {blogs && blogs.length > 0 ? (
        blogs
          .slice()
          .reverse()
          .map((blog, index) => (
            <div className="mb-3" key={index}>
              <BlogCard
                title={blog.title}
                content={blog.content}
                url={blog.url}
                details={details}
              />
            </div>
          ))
      ) : (
        <p>No blogs available</p>
      )}
    </Layout>
  );
}
