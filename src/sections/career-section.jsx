import { Badge } from "@/components/ui/badge";
import { BriefcaseBusinessIcon, GraduationCapIcon } from "lucide-react";
import { HiOutlineCode } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";

export const CareerSection = () => {
  return (
    <div id="career" className="my-10 py-10">
      <div className="w-full max-w-6xl mx-auto relative text-[#ededed] px-4 xl:px-0">
        <Badge className="absolute top-4 left-4 md:left-1/2 md:-translate-x-1/2 cursor-default bg-amber-600 text-[#ededed] font-normal">
          Career
        </Badge>
        <div className="text-[#262626] dark:text-[#ededed]">
          <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-500 dark:before:via-teal-900 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-[30px] shadow shrink-0 md:order-1 mr-5 md:group-even:translate-x-1/2 bg-[#ededed]"
              >
                <HiOutlineCode className="size-4.5" strokeWidth={2.2} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-teal-500 dark:border-teal-800">
                <time className="font-semibold text-base">2023 - Present</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Web Developer - Yoseo Shopify Experts
                    </div>
                  </div>
                  <div className="text-sm">
                    Developed and customized Shopify eCommerce websites with
                    responsive designs, third-party integrations, and optimized
                    UX/UI to enhance functionality and conversion rates.
                    Provided ongoing maintenance and performance optimizations
                    for scalability.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-[30px] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:ml-5 bg-[#ededed]"
              >
                <HiOutlineCode
                  className="size-4.5 text-[#262626] dark:text-[#ededed]"
                  strokeWidth={2.2}
                />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-amber-500 dark:border-amber-700">
                <time className="font-semibold text-base">2022 - 2023</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Frontend Developer - ITSchool
                    </div>
                  </div>
                  <div className="text-sm">
                    Completed a Frontend Development course at ITSchool, gaining
                    hands-on experience with HTML, CSS, Bootstrap, and React to
                    build responsive and dynamic web applications.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 mr-5 md:group-even:translate-x-1/2 bg-[#ededed]"
              >
                <HiOutlineCode
                  className="size-4.5 text-[#262626] dark:text-[#ededed]"
                  strokeWidth={2.2}
                />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-rose-500 dark:border-rose-800">
                <time className="font-semibold text-base">2021 - 2022</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Frontend Developer - Freelancer
                    </div>
                  </div>
                  <div className="text-sm">
                    Developed custom, responsive websites using HTML, CSS,
                    JavaScript, ReactJS, and Tailwind CSS, delivering
                    user-friendly designs aligned with client goals.
                    Collaborated closely with clients to provide tailored
                    creative and technical solutions.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:ml-5 bg-[#ededed]"
              >
                <BriefcaseBusinessIcon className="size-4.5 text-[#262626] dark:text-[#ededed]" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-teal-500 dark:border-teal-800">
                <time className="font-semibold text-base">2020 - 2023</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Customer Success Associate
                    </div>
                  </div>
                  <div className="text-sm">
                    Handled escalated customer issues with advanced
                    problem-solving and communication, ensuring high
                    satisfaction. Mentored junior team members and contributed
                    to process improvements to enhance service quality.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 mr-5 md:group-even:translate-x-1/2 bg-[#ededed]"
              >
                <GraduationCapIcon className="size-4.5 text-[#262626] dark:text-[#ededed]" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-amber-500 dark:border-amber-700">
                <time className="font-semibold text-base">2014 - 2018</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Polytechnic University - Power Engineering
                    </div>
                  </div>
                  <div className="text-sm">
                    Developed analytical and problem-solving skills with a focus
                    on software applications, automation, and technical systems.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                data-glow
                className="flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:ml-5 bg-[#ededed]"
              >
                <FiFileText className="size-4.5 text-[#262626] dark:text-[#ededed]" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col gap-y-2 shadow-md shadow-neutral-400 dark:shadow-neutral-950 rounded-md py-4 px-2 lg:px-4 border-l-3 border-rose-500 dark:border-rose-800">
                <time className="font-semibold text-base">2010 - 2014</time>
                <div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-lg mb-2">
                      Informatics High School
                    </div>
                  </div>
                  <div className="text-sm">
                    Studied Informatics in high school, gaining a strong
                    foundation in programming, algorithms, and problem-solving
                    with a focus on computer science and software development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
