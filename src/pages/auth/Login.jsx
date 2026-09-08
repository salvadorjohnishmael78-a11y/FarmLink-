import { useState } from "react";

function Login({ apiUrl }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password.");
      }

      localStorage.setItem("farmlink_user", JSON.stringify(data.user));
      redirectUser(data.user);
    } catch (err) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        const savedUser = JSON.parse(
          localStorage.getItem("farmlink_user") || "null"
        );

        if (
          savedUser?.email === form.email &&
          savedUser?.password === form.password
        ) {
          redirectUser(savedUser);
        } else {
          setError(
            "Backend unavailable. Register locally first, then use the same email and password."
          );
        }
      } else {
        setError(err.message || "Invalid email or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  const redirectUser = (user) => {
    if (user.role === "admin") {
      window.location.href = "/admin";
    } else if (user.role === "farmer") {
      window.location.href = "/farmer";
    } else if (user.role === "rider") {
      window.location.href = "/rider";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <a href="/">
          <span>🌿</span>
          FarmLink
        </a>
      </div>

      <div className="login-wrapper">
        <div className="login-image">
          <div className="login-image-overlay">
            <span>🌱</span>
            <h2>Fresh From Local Farms</h2>
            <p>
              Connect with local farmers and discover fresh, quality farm
              products.
            </p>
          </div>
        </div>

        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back!</h1>
            <p>Login to your FarmLink account</p>
          </div>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password">Forgot Password?</a>
              </div>

              <div className="password-input">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={updateField}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="login-divider"><span>OR</span></div>

          <div className="social-login">
            <button type="button"><span>G</span> Continue with Google</button>
            <button type="button"><span>f</span> Continue with Facebook</button>
          </div>

          <p className="register-prompt">
            Don't have an account?
            <a href="/register"> Create an account</a>
          </p>

          <a href="/" className="back-home">← Back to FarmLink</a>
        </div>
      </div>

      <p className="auth-copyright">
        © 2026 FarmLink. All Rights Reserved.
      </p>
    </div>
  );
}

export default Login;