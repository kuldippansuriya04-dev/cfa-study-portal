import { useState, useEffect } from "react";
import StudyPlatformApp from "@/app/app";
import LoginPage from "@/components/LoginPage";

export default function App() {
  const [user, setUser] = useState<{ name: string; studentId: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cfa_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) {
    return <LoginPage onLogin={(name, studentId) => setUser({ name, studentId })} />;
  }

  return <StudyPlatformApp />;
}
