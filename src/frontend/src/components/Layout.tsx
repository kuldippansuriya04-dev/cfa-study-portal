import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  BarChart2,
  BookOpen,
  ChevronRight,
  Clock,
  FileText,
  LogIn,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const NAV_LINKS = [
  { to: "/", label: "Dashboard", icon: BarChart2 },
  { to: "/topics", label: "Topics", icon: BookOpen },
  { to: "/exams", label: "Mock Exams", icon: FileText },
  { to: "/history", label: "My Scores", icon: Clock },
];

export default function Layout() {
  const { isAuthenticated, login, logout, isLoading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-primary border-b border-primary/20 shadow-elevated"
        data-ocid="main-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className="w-9 h-9 rounded-sm bg-accent flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="text-primary-foreground font-display text-base font-bold tracking-tight">
                  CFA Study Portal
                </div>
                <div className="text-primary-foreground/60 text-[10px] font-body tracking-widest uppercase">
                  Level I Preparation
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                    isActive(to)
                      ? "bg-accent/20 text-accent"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10",
                  )}
                  data-ocid={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link to="/profile" data-ocid="nav-profile">
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center cursor-pointer hover:bg-accent/30 transition-smooth">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => logout()}
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    data-ocid="logout-button"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={() => login()}
                  disabled={isLoading}
                  className="hidden md:flex bg-accent text-primary hover:bg-accent/90 font-semibold"
                  data-ocid="login-button"
                >
                  <LogIn className="w-4 h-4 mr-1.5" />
                  {isLoading ? "Signing in…" : "Sign In"}
                </Button>
              )}
              <button
                type="button"
                className="md:hidden text-primary-foreground/80 hover:text-primary-foreground p-1.5 rounded transition-smooth"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t border-primary-foreground/10 bg-primary animate-slide-up"
            data-ocid="mobile-menu"
          >
            <nav className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-smooth",
                    isActive(to)
                      ? "bg-accent/20 text-accent"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-50" />
                </Link>
              ))}
              <div className="pt-2 border-t border-primary-foreground/10">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-smooth",
                        isActive("/profile")
                          ? "bg-accent/20 text-accent"
                          : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10",
                      )}
                      data-ocid="mobile-nav-profile"
                    >
                      <User className="w-4 h-4" />
                      My Profile
                      <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-50" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      login();
                      setMobileOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-accent font-semibold"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In with Internet Identity
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-primary flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-foreground">
                CFA Study Portal
              </span>
            </div>
            <p>
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
