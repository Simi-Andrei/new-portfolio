export const Footer = () => {
  return (
    <footer className="h-12 grid place-items-center border-t border-neutral-300 dark:border-t-neutral-800 pb-96">
      <p className="text-center text-sm">
        @{new Date().getFullYear()} Andrei Simigiu | Portfolio
      </p>
    </footer>
  );
};
