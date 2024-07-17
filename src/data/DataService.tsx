import { createContext, useContext, useEffect, useState } from "react";
import { Blog } from "@/data/Blog";
import { Project } from "@/data/Project";
import { General, Link } from "@/data/General";

interface DataServiceContextType {
  blogs: Blog[];
  projects: Project[];
  generals: General | null;
  links: Link[];
}

const initialDataServiceState: DataServiceContextType = {
  blogs: [],
  projects: [],
  generals: null,
  links: [],
};

const DataServiceContext = createContext<DataServiceContextType>(
  initialDataServiceState
);

export function useDataService() {
  return useContext(DataServiceContext);
}

export function DataServiceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [generals, setGenerals] = useState<General | null>(null);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    fetch("https://krishnanand-a-default-rtdb.firebaseio.com/website.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs || []);
        setProjects(data.projects || []);
        setGenerals(data.generals || null);
        setLinks(data.social || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DataServiceContext.Provider value={{ blogs, projects, generals, links }}>
      {children}
    </DataServiceContext.Provider>
  );
}
