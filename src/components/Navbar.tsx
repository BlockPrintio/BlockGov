import { Search, Menu } from "lucide-react";
    import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";  
import  Link  from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-xl border-b border-border/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white/90 rounded-full"></div>
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">BlockGov</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/explorer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explore</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Create</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search Block Gov."
                className="pl-10 h-10 rounded-lg bg-muted/40 border-transparent focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Sign in</Button>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
             variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search Block Gov."
                  className="pl-10 h-10 rounded-lg bg-muted/40 border-transparent focus-visible:ring-2 focus-visible:ring-ring"
                />
            </div>
              <Link href="/" className="text-foreground hover:text-primary transition-colors py-2">Home</Link>
              <Link href="/explorer" className="text-foreground hover:text-primary transition-colors py-2">Explore</Link>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Create</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Sign in</Button>
                <Button variant="gradient">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;