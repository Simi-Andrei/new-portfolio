import { Badge } from "../ui/badge";

export const WelcomeMobile = () => {
  return (
    <div className="flex-1 h-[28rem] flex flex-col items-center justify-center px-4 py-6 shrink-0 inner-shadow shadow-md shadow-black/50 relative mb-4 lg:mb-0 rounded-[30px] bg-[#ededed] border-2 border-[#525252] dark:bg-[#262626] dark:border-[#404040] lg:hidden">
      <Badge className="absolute top-4 left-4 cursor-default bg-teal-900 text-[#ededed] font-normal">
        Meet Me
      </Badge>
      <h2 className="text-center mb-6 text-2xl font-medium">Welcome!</h2>
      <p className="text-center text-[0.9rem]">
        I'm a web developer with a passion for building seamless, full-stack
        applications. While coding is my main focus, I also have a love for
        design, and I enjoy creating pixel-perfect layouts and styling with
        attention to detail. My goal is to build clean, responsive, and
        user-friendly websites that not only work great but also look amazing.
        Take a look around my portfolio – I’m excited to share my work with you
        and explore how we can bring your ideas to life!
        <br />
        <br />
        My tech stack? It's fueled by three key ingredients
      </p>
    </div>
  );
};
