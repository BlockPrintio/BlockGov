import { Search, Menu, Wallet } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";  
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isTreasuryExplorer = router.pathname === "/treasury-explorer" || router.pathname === "/treasury-explorer/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-xl border-b border-border/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
              <img
                src="/blockprint-logo.png"
                alt="BlockGov logo"
                className="w-12 h-12"
              />
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
            <div className="relative group">
              {isTreasuryExplorer ? (
                <Button
                  variant="gradient"
                  className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-ring cursor-default"
                  disabled
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </Button>
              ) : (
                <>
                  <Button
                    variant="gradient"
                    className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-ring cursor-default"
                    disabled
                  >
                    Launch App
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
                  </Button>
                  {/* Custom Dropdown menu for Launch App */}
                  <div className="absolute right-0 mt-2 min-w-[200px] bg-gradient-to-br from-muted/90 via-background to-muted/70 border border-border rounded-xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                    <Link
                      href="/treasury-explorer"
                      className="flex items-center gap-3 px-5 py-3 text-base text-foreground font-medium hover:bg-gradient-primary/70 transition rounded-xl cursor-pointer"
                      style={{
                        // Subtle glassy visual
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        color: "inherit",
                      }}
                      // Prevent color change on hover -- keep text color as current
                      onMouseEnter={e => { e.currentTarget.style.color = ""; }}
                      onMouseLeave={e => { e.currentTarget.style.color = ""; }}
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="13" rx="3" className="text-primary" stroke="currentColor" fill="none"/>
                        <path d="M8 7V5a4 4 0 1 1 8 0v2" className="text-primary" stroke="currentColor"/>
                      </svg>
                      <span>
                        Treasury Explorer
                      </span>
                      <span className="ml-auto rounded bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground animate-pulse">Beta</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
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
                {isTreasuryExplorer ? (
                  <Button variant="gradient" disabled className="cursor-default">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                ) : (
                  <Button variant="gradient" disabled className="cursor-default">
                    Launch App
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;