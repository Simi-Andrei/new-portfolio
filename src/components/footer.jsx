export const Footer = () => {
  return (
    <footer className="h-12 grid place-items-center border-t border-neutral-700 bg-neutral-900">
      <p className="text-center text-sm text-neutral-300">
        @{new Date().getFullYear()} Andrei Simigiu | Portfolio
      </p>
    </footer>
  );
};
