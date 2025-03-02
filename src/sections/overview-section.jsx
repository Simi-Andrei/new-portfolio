import { CatContainer } from "@/components/cat/cat-container";
import { KangarooContainer } from "@/components/kangaroo/kangaroo-container";
import { ButterflyContainer } from "@/components/butterfly/butterfly-container";
import { CogIcon, HandIcon, MessageCircleMoreIcon } from "lucide-react";
import { RedDot } from "@/components/red-dot";
import { YellowDot } from "@/components/yellow-dot";
import { TealDot } from "@/components/teal-dot";
import { GiPipes } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaCogs } from "react-icons/fa";

export const OverviewSection = () => {
  return (
    <div className="w-full rounded-[30px] flex items-center justify-center gap-10 p-10 h-[calc(80vh)] mt-2">
      <div className="flex-1 flex flex-col items-start justify-center h-full gap-y-4 cursor-default">
        <p className="text-3xl font-medium">
          Hello there! I
          <span className="bg-gradient-to-b from-teal-500 via-teal-700 to-teal-950 bg-clip-text text-transparent">
            &apos;
          </span>
          m
        </p>
        <h2 className="font-extrabold text-7xl bg-gradient-to-b from-teal-500 via-teal-700 to-teal-950 bg-clip-text text-transparent py-2">
          Andrei Simigiu
        </h2>
        <p className="text-5xl font-medium">Web Developer</p>
        <div className="flex items-center justify-start gap-x-4 mt-8">
          <Button
            className="rounded-[30px] bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-400 text-neutral-900 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-md group"
            asChild
          >
            <a href="#">
              Meet Me
              <HandIcon className="group-hover:text-teal-800 group-hover:scale-110 duration-150" />
            </a>
          </Button>
          <Separator orientation="vertical" className="!h-6 bg-neutral-600" />
          <Button
            className="rounded-[30px] bg-gradient-to-b from-neutral-800 to-neutral-900 hover:opacity-95 transition-opacity duration-150 !px-6 h-10 shadow-md group"
            asChild
          >
            <a href="#">
              Let's Talk
              <MessageCircleMoreIcon className="group-hover:text-teal-800 group-hover:scale-110 duration-150" />
            </a>
          </Button>
        </div>
      </div>
      <div
        data-glow
        className="flex-1 h-auto rounded-[30px] grid place-items-center inner-shadow"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full p-8">
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <div
              data-glow
              className="flex items-center justify-start gap-x-2 py-1.5 px-4 rounded-[30px] inner-shadow"
            >
              <RedDot />
              <span className="font-medium text-sm">Curiosity</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#005f5a"
              className="bi bi-speedometer2 w-14 h-14"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
                <path
                  fillRule="evenodd"
                  d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <svg
              className="w-20 h-20 animate-[reverse_spin_50s_linear_infinite]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.71297 5.1753C8.68625 5.62451 9.84239 5.1775 10.2547 4.18801C10.901 2.63687 13.0984 2.63687 13.7447 4.18801C14.157 5.1775 15.3132 5.62451 16.2864 5.1753C17.8968 4.43205 19.5676 6.10283 18.8243 7.71321C18.3751 8.68649 18.8221 9.84263 19.8116 10.2549C21.3628 10.9012 21.3628 13.0987 19.8116 13.745C18.8221 14.1573 18.3751 15.3134 18.8243 16.2867C19.5676 17.8971 17.8968 19.5678 16.2864 18.8246C15.3132 18.3754 14.157 18.8224 13.7447 19.8119C13.0984 21.363 10.901 21.363 10.2547 19.8119C9.84239 18.8224 8.68625 18.3754 7.71297 18.8246C6.10259 19.5678 4.4318 17.8971 5.17505 16.2867C5.62426 15.3134 5.17725 14.1573 4.18776 13.745C2.63663 13.0987 2.63663 10.9012 4.18776 10.2549C5.17725 9.84263 5.62426 8.68649 5.17505 7.71321C4.4318 6.10283 6.10259 4.43205 7.71297 5.1753ZM11.9997 8.74994C10.2048 8.74994 8.7497 10.205 8.7497 11.9999C8.7497 13.7949 10.2048 15.2499 11.9997 15.2499C13.7946 15.2499 15.2497 13.7949 15.2497 11.9999C15.2497 10.205 13.7946 8.74994 11.9997 8.74994Z"
                  fill="#26262699"
                ></path>
                <path
                  d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
                  stroke="#404040"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#005f5a"
                  strokeWidth="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <FaCogs className="text-neutral-700 size-10 -rotate-45" />
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="#26262699"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H12H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V10V13C21 14.8856 21 15.8284 20.4142 16.4142C19.8284 17 18.8856 17 17 17H12H7C5.11438 17 4.17157 17 3.58579 16.4142C3 15.8284 3 14.8856 3 13V10V7Z"
                  fill="#005f5a"
                ></path>
                <path
                  d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H12H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V10V13C21 14.8856 21 15.8284 20.4142 16.4142C19.8284 17 18.8856 17 17 17H12H7C5.11438 17 4.17157 17 3.58579 16.4142C3 15.8284 3 14.8856 3 13V10V7Z"
                  stroke="#005f5a"
                  strokeWidth="1"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7 21H17"
                  stroke="#005f5a"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 17V21"
                  stroke="#005f5a"
                  strokeWidth="1"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <div
              data-glow
              className="flex items-center justify-start gap-x-2 py-1.5 px-4 rounded-[30px] inner-shadow"
            >
              <YellowDot />
              <span className="font-medium text-sm">Ambition</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <div
              data-glow
              className="flex items-center justify-start gap-x-2 py-1.5 px-4 rounded-[30px] inner-shadow"
            >
              <TealDot />
              <span className="font-medium text-sm">Passion</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="processor"
              data-name="Line Color"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color w-20 h-20"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  className="fill-none"
                  stroke="#005f5a"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="secondary"
                  d="M12,6V3m4,3V4M8,6V4m10,8h3m-3,4h2M18,8h2M12,18v3M8,18v2m8-2v2M6,12H3M6,8H4m2,8H4"
                ></path>
                <path
                  className="fill-none"
                  stroke="#404040"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="primary"
                  d="M17,18H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1V17A1,1,0,0,1,17,18Zm-3-8H10v4h4Z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="#26262699"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              className="w-24 h-24"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  d="M3 12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8H10.5H14C15.8856 8 16.8284 8 17.4142 8.58579C18 9.17157 18 10.1144 18 12V12V12C18 13.8856 18 14.8284 17.4142 15.4142C16.8284 16 15.8856 16 14 16H10.5H7C5.11438 16 4.17157 16 3.58579 15.4142C3 14.8284 3 13.8856 3 12V12V12Z"
                  fill="#005f5a"
                ></path>
                <path
                  d="M21 11V13"
                  stroke="#005f5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.00018 13L6.00019 11"
                  stroke="#005f5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.0002 13L10.0002 11"
                  stroke="#005f5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8H10.5H14C15.8856 8 16.8284 8 17.4142 8.58579C18 9.17157 18 10.1144 18 12V12V12C18 13.8856 18 14.8284 17.4142 15.4142C16.8284 16 15.8856 16 14 16H10.5H7C5.11438 16 4.17157 16 3.58579 15.4142C3 14.8284 3 13.8856 3 12V12V12Z"
                  stroke="#005f5a"
                  strokeWidth="1"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
