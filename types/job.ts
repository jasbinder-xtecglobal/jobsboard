export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: "Full-time" | "Part-time";
  salary: string;
  postedAt: string;
  description: string;
  requirements: string[];
  applyLink: string;
}
