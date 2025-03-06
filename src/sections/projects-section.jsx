import docsCloneProject from "/images/docsCloneProject.png";
import slackCloneProject from "/images/slackCloneProject.png";
import techieProject from "/images/techieProject.png";
import groceryApp from "/images/groceryApp.png";
import weatherApp from "/images/weatherApp.png";
import hungryMe from "/images/hungryMe.png";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HiOutlineCode } from "react-icons/hi";
import { EyeIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Separator } from "@/components/ui/separator";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: docsCloneProject,
      title: "NextJs 15 Docs Clone",
      description:
        "Developed a real-time collaborative editing app similar to Google Docs, supporting multi-user editing, threaded comments, and document organization. Focused on efficient state management, and a seamless user experience.",
      stack: [
        "NextJs 15",
        "Convex",
        "Clerk",
        "TailwindCSS",
        "Shadcn/ui",
        "Liveblocks",
        "Nuqs",
      ],
      demo: "https://docs-clone-olive.vercel.app/",
      code: "https://github.com/Simi-Andrei/docs-clone",
    },
    {
      id: 2,
      image: slackCloneProject,
      title: "NextJs 14 Slack Clone",
      description:
        "Full-stack app with workspaces, channels, and direct messaging similar to Slack. Supports credential, GitHub, and Google authentication, built for real-time collaboration.",
      stack: [
        "NextJs 14",
        "Convex",
        "TailwindCSS",
        "Shadcn/ui",
        "Quill",
        "Nuqs",
        "Jotai",
      ],
      demo: "https://nextjs14-slack-clone.vercel.app/",
      code: "https://github.com/Simi-Andrei/nextj14-slack-clone",
    },
    {
      id: 3,
      image: techieProject,
      title: "techie E-commerce App",
      description:
        "MERN full-stack e-commerce platform with category browsing, cart, and order placement. Supports PayPal payments and admin controls for order management, product editing, and user management.",
      stack: [
        "MongoDB",
        "Mongoose",
        "NodeJs",
        "ExpressJs",
        "TailwindCSS",
        "React",
        "Redux",
      ],
      demo: "https://itschool-techie-project.onrender.com/",
      code: "https://github.com/Simi-Andrei/itschool-mern-techie-project",
    },
    {
      id: 4,
      image: groceryApp,
      title: "Grocery App",
      description:
        "MERN full-stack app for creating and managing shopping lists. Add, edit, and delete products to ensure you get everything you need.",
      stack: [
        "MongoDB",
        "Mongoose",
        "ExpressJs",
        "TailwindCSS",
        "React",
        "Formik",
        "Yup",
      ],
      demo: "https://mern-context-crud-app.onrender.com/",
      code: "https://github.com/Simi-Andrei/mern-context-crud-app",
    },
    {
      id: 5,
      image: weatherApp,
      title: "Weather App",
      description:
        "React App using weather API to search for the current weather and for the next 7 days forecast with different endpoints. Very precise on location and time.",
      stack: ["Tailwind CSS", "React", "WeatherAPI"],
      demo: "https://react-weather-app-8yy2.onrender.com/",
      code: "https://github.com/Simi-Andrei/react-weather-app",
    },
    {
      id: 6,
      image: hungryMe,
      title: "HungryMe Restaurant Ordering App",
      description:
        "React App developed for placing online order from a fast foodrestaurant. You can browse different categories such as Pizza, Burgers, Soups and not the least, good wines and cakes.",
      stack: ["React"],
      demo: "",
      code: "",
    },
  ];

  return (
    <div id="projects" className="my-10 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 relative py-10">
        <Badge className="absolute top-0 left-0 cursor-default bg-rose-600 dark:bg-rose-700 text-[#ededed] font-normal">
          Projects
        </Badge>
        {projects.map((project) => (
          <div
            className="shadow-md shadow-neutral-400 dark:shadow-neutral-950 flex rounded-b-md flex-col gap-y-2 rounded-r-md pb-4"
            key={project.id}
          >
            <div className="flex items-start justify-start gap-x-2">
              <div className="flex-1">
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <img
                      src={project.image}
                      alt="Project"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </DialogTrigger>
                  <DialogContent className="p-0 rounded-none shadow-none border-none !max-w-6xl">
                    <VisuallyHidden>
                      <DialogHeader>
                        <DialogTitle />
                        <DialogDescription />
                      </DialogHeader>
                    </VisuallyHidden>
                    <img
                      src={project.image}
                      alt="Project"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Separator className="!w-11/12 mx-auto" />
            <div className="flex-1 px-4">
              <div className="mb-3 flex flex-wrap items-center justify-start gap-x-2">
                {project.stack.map((item, index) => (
                  <Badge
                    key={index}
                    className="text-[10px] md:text-xs py-0 my-1 text-neutral-700 dark:text-[#262626] bg-[#ededed]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-1">
                {project.title}{" "}
                {project.id === 6 && (
                  <span className="text-xs font-normal">
                    (not live at the moment)
                  </span>
                )}
              </h3>
              {/* <p className="text-sm min-h-24">{project.description}</p> */}
              <div className="flex items-center justify-start gap-x-2">
                <Button
                  className="rounded-[30px] bg-gradient-to-b from-teal-800 to-teal-950 hover:opacity-95 transition-opacity duration-150 text-[#ededed] !px-6"
                  asChild
                  disabled={project.code === ""}
                >
                  <a target="_blank" href={project.code}>
                    Code
                    <HiOutlineCode />
                  </a>
                </Button>
                <Button
                  className="rounded-[30px] bg-gradient-to-b from-amber-500 to-amber-800 hover:opacity-95 transition-opacity duration-150 text-[#ededed] !px-6"
                  asChild
                  disabled={project.demo === ""}
                >
                  <a target="_blank" href={project.demo}>
                    Demo
                    <EyeIcon />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
