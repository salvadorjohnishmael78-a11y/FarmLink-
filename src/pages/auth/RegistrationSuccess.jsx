import { useState } from "react";

export default function RegistrationSuccess() {
  const [role] = useState(() => {
    const user = JSON.parse(localStorage.getItem("farmlink_user") || "null");
    return user?.role === "rider" ? "rider" : "farmer";
  });

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Registration Successful!</h1>
        <p>Your {role} account has been created. You can now login to FarmLink.</p>
        <a href="/login" className="login-submit success-button">Go to Login</a>
        <a href="/" className="back-home">← Back to FarmLink</a>
      </div>
    </div>
  );
}