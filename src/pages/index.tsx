import Layout from "@/layouts/Layout";
import { useDataService } from "@/data/DataService";
import { useTheme } from "@/contexts/themes";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { ProjectCard } from "@/components/ProjectCard";
import { Notification } from "@/components/Notification";
import Head from "next/head";

export default function Page() {
  const { generals, blogs, links, projects } = useDataService();
  const { theme, toggleTheme } = useTheme();

  function highlight(text: string): string {
    return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  }

  return (
    <Layout>
      {generals ? (
        <>
          <div>
            <Head>
              <link rel="shortcut icon" href="favicon.png" />
              <title>Krishnanand A</title>
            </Head>
          </div>
          <div className="flex justify-end">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <Image
                  src="/dark.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
              ) : (
                <Image
                  src="/sun.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
              )}
            </button>
          </div>
          <>
            <h1 className="text-3xl font-bold mt-10">{generals.name}</h1>
            <div className=" data-container">
              {generals.description ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: highlight(generals.description),
                  }}
                ></div>
              ) : null}
            </div>
            <div className="mt-5 flex gap-2">
              {links &&
                links.map((link, index) => (
                  <Link target="_blank" href={link.url} key={index}>
                    <Image
                      src={link.icon_url}
                      width={22}
                      height={22}
                      alt={link.title}
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                  </Link>
                ))}
            </div>
          </>

          <section className="mt-28">
            <div className="flex justify-between items-center">
              <h1 className="section-heading">Latest Blogs</h1>
              <Notification
                text="See more"
                message="Feature is on progress! Swipe to discard the message"
              />
            </div>
            <div className="flex flex-wrap gap-5 mt-5">
              {blogs &&
                blogs.length > 0 &&
                blogs
                  .slice()
                  .reverse()
                  .slice(0, 2)
                  .map((blog, index) => {
                    return (
                      <BlogCard
                        key={index}
                        title={blog.title}
                        content={blog.content}
                        url={blog.url}
                      />
                    );
                  })}
            </div>
          </section>

          <section className="mt-28">
            <div className="flex justify-between items-center">
              <h1 className="section-heading">Latest Projects</h1>
              <Notification
                text="See more"
                message="Feature is on progress! Swipe to discard the message"
              />
            </div>
            <div className="mt-5">
              {projects &&
                projects
                  .slice(0, 3)
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      name={project.name}
                      description={
                        project.description || "Description not ready yet"
                      }
                      github={project.github || ""}
                      production={project.production}
                      tools={project.tools}
                    />
                  ))}
            </div>
          </section>
        </>
      ) : (
        <Progress value={33} />
      )}
    </Layout>
  );
}
