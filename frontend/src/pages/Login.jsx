import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue to your attendance dashboard."
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button className="auth-button" type="submit">
          Login
        </button>
      </form>

      <div className="auth-link">
        Don't have an account? <Link to="/register">Create an account</Link>
      </div>
    </AuthLayout>
  );
}

export default Login;
