import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      await login(email, pw);
      nav("/", { replace: true });
    } catch {
      setErr("שם משתמש או סיסמה שגויים");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page center-col">
      <div className="login-box">
        <div className="login-icon">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7 8h10M7 12h10M7 16h6" />
          </svg>
        </div>
        <h1>סורק חשבוניות</h1>
        <p className="dim">מילאנו</p>
        <form onSubmit={submit}>
          <input
            type="email" placeholder="אימייל" value={email}
            onChange={(e) => setEmail(e.target.value)} required dir="ltr"
          />
          <input
            type="password" placeholder="סיסמה" value={pw}
            onChange={(e) => setPw(e.target.value)} required dir="ltr"
          />
          {err && <p className="err">{err}</p>}
          <button className="btn pri full" type="submit" disabled={busy}>
            {busy ? "מתחבר..." : "כניסה"}
          </button>
        </form>
      </div>
    </div>
  );
}
