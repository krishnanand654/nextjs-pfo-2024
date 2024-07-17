import Layout from "@/layouts/Layout";
import { useDataService } from "@/data/DataService";

export default function Page() {
  const { blogs } = useDataService();

  return (
    <Layout>
      {blogs && blogs.length > 0 ? (
        blogs.slice(0, 2).map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
      <h1>Hello, Next.js!</h1>
    </Layout>
  );
}
