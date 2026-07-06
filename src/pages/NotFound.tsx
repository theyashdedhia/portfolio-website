import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="panel mx-6 w-full max-w-md p-8 text-center">
        <p className="fig-label">Error</p>
        <h1 className="display mt-3 text-5xl font-extrabold">404</h1>
        <p className="mt-3 text-[15px] text-foreground/70">
          This page doesn't exist. The route <span className="font-mono text-sm">{location.pathname}</span> returned nothing.
        </p>
        <a
          href="./"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
