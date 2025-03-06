export const Footer = () => {
  return (
    <footer className="h-12 mb-20 sm:mb-0 grid place-items-center border-t border-neutral-300 dark:border-t-neutral-800">
      <p className="text-center text-sm text-muted-foreground">
        @{new Date().getFullYear()} Andrei Simigiu | Portfolio
      </p>
    </footer>
  );
};
