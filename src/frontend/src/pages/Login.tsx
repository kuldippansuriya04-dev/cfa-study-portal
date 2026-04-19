import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const ok = login(email, password);
    if (ok) {
      navigate("/");
    } else {
      setError("Email and password (min 6 chars) required.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>CFA Study Portal — Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: 12, padding: 8, fontSize: 16 }}
      />
      <input
        type="password"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: 12, padding: 8, fontSize: 16 }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: 10, fontSize: 16, background: "#1a56db", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}
      >
        Sign In
      </button>
      <p style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
        Any email + any password (6+ chars) works.
      </p>
    </div>
  );
}
