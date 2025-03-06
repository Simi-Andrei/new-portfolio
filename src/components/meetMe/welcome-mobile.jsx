import { Badge } from "../ui/badge";

export const WelcomeMobile = () => {
  return (
    <div className="flex-1 h-[28rem] flex flex-col items-center justify-center px-4 py-6 shrink-0 inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950 relative mb-4 lg:mb-0 rounded-[30px] bg-[#ededed] border-2 border-[#525252] dark:bg-[#262626] dark:border-[#404040] lg:hidden">
      <Badge className="absolute top-4 left-4 cursor-default bg-teal-600 dark:bg-teal-800 text-[#ededed] font-normal">
        Meet Me
      </Badge>
      <h2 className="text-center mb-6 text-2xl font-medium">Welcome!</h2>
      <p className="text-center text-[0.9rem]">
        I’m a web developer with a passion for building efficient and seamless
        full-stack applications. While coding is my main focus, I also have a
        strong eye for design and enjoy crafting pixel-perfect layouts with
        meticulous attention to detail. My goal is to create clean, responsive,
        and user-friendly websites that are both visually appealing and
        highly functional.
        <br />
        <br />
        My tech stack? It's fueled by three key ingredients
      </p>
    </div>
  );
};
