export interface Project {
  name: string;
  description: string;
  production: string;
  github: string;
  tools: Tool[];
}

export interface Tool {
  name: string;
  version: string;
}
