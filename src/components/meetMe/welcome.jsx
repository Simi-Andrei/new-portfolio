import { Badge } from "../ui/badge";

export const Welcome = () => {
  return (
    <div
      data-glow
      className="flex-1 h-[28rem] flex-col items-center justify-center px-4 py-6 shrink-0 inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950 relative mb-4 lg:mb-0 hidden lg:flex"
    >
      <Badge className="absolute top-4 left-4 cursor-default bg-teal-600 dark:bg-teal-800 text-[#ededed] font-normal">
        Meet Me
      </Badge>
      <h2 className="text-center mb-6 text-2xl font-medium">Welcome!</h2>
      <p className="text-center text-[0.9rem]">
        I'm a web developer with a passion for building seamless, full-stack
        applications. While coding is my main focus, I also have a love for
        design, and I enjoy creating pixel-perfect layouts and styling with
        attention to detail. My goal is to build clean, responsive, and
        user-friendly websites that not only work great but also look amazing.
        <br />
        <br />
        My tech stack? It's fueled by three key ingredients
      </p>
    </div>
  );
};
