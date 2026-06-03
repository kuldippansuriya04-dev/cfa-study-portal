import { useState } from "react";

interface LoginPageProps {
  onLogin: (name: string, studentId: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name.trim() || !studentId.trim()) {
      setError("Please enter both name and student ID");
      return;
    }
    localStorage.setItem("cfa_user", JSON.stringify({ name, studentId }));
    onLogin(name, studentId);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: "#1e293b",
        borderRadius: "16px",
        padding: "48px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        border: "1px solid #334155"
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            background: "#2563eb",
            borderRadius: "12px",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            fontSize: "24px"
          }}>📚</div>
          <h1 style={{ color: "white", fontSize: "24px", margin: "0 0 8px" }}>CFA Sturdy Hud</h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>Sign in to continue studying</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#94a3b8", fontSize: "14px", display: "block", marginBottom: "8px" }}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ color: "#94a3b8", fontSize: "14px", display: "block", marginBottom: "8px" }}>
            Student ID
          </label>
          <input
            type="text"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        {error && (
          <p style={{ color: "#ef4444", fontSize: "14px", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sign In →
        </button>

        <p style={{ color: "#475569", fontSize: "12px", textAlign: "center", marginTop: "24px" }}>
          CFA Level I Study Portal
        </p>
      </div>
    </div>
  );
}
