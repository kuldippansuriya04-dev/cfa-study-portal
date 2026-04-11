import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigate } from "@tanstack/react-router";
import { BarChart2, BookOpen, CheckCircle, Shield } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const FEATURES = [
  {
    icon: BookOpen,
    text: "10 CFA Level I topic areas with practice questions",
  },
  { icon: BarChart2, text: "10 full-length mock exams with score tracking" },
  { icon: CheckCircle, text: "Detailed explanations for every question" },
  { icon: Shield, text: "Secure, private — your data stays yours" },
];

export default function Login() {
  const { isAuthenticated, isLoading, login } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left — Branding */}
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center shadow-elevated">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                CFA Study Portal
              </h1>
              <p className="text-muted-foreground text-sm">
                Level I Exam Preparation
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-foreground leading-tight mb-3">
              Master the CFA Exam with Confidence
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive practice questions, mock exams, and score analytics
              — everything you need to pass the CFA Level I exam on your first
              attempt.
            </p>
          </div>

          <ul className="space-y-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                {text}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 py-3 px-4 bg-muted/40 rounded-md border border-border">
            <div className="text-center">
              <div className="font-display text-xl font-bold text-primary">
                10
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Topics
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display text-xl font-bold text-primary">
                200+
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Questions
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display text-xl font-bold text-primary">
                10
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Mock Exams
              </div>
            </div>
          </div>
        </div>

        {/* Right — Sign In Card */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <Card className="shadow-elevated border border-border bg-card p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                Sign In to Continue
              </h3>
              <p className="text-sm text-muted-foreground">
                Use Internet Identity for secure, decentralized authentication.
                No password required.
              </p>
            </div>

            <Button
              onClick={() => login()}
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base shadow-card"
              data-ocid="ii-login-button"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Authenticating…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Sign in with Internet Identity
                </span>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
              Internet Identity is a blockchain-based authentication system.
              Your identity is secure and private.
            </p>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-center text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                Your progress is tracked for:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Practice scores",
                  "Mock exam results",
                  "Topic accuracy",
                  "Study streaks",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
