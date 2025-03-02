import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const syncPointer = (event) => {
  const { clientX: x, clientY: y } = event;
  document.documentElement.style.setProperty("--x", x.toFixed(2));
  document.documentElement.style.setProperty(
    "--xp",
    (x / window.innerWidth).toFixed(2)
  );
  document.documentElement.style.setProperty("--y", y.toFixed(2));
  document.documentElement.style.setProperty(
    "--yp",
    (y / window.innerHeight).toFixed(2)
  );
};

export const addPointerSync = () => {
  document.body.addEventListener("pointermove", syncPointer);
};

export const removePointerSync = () => {
  document.body.removeEventListener("pointermove", syncPointer);
};
