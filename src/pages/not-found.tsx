import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center px-6">
        <p className="text-sm text-muted-foreground mb-2">Error 404</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center h-11 px-6 rounded-lg bg-gradient-primary text-white shadow-elegant hover:shadow-glow transition">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
