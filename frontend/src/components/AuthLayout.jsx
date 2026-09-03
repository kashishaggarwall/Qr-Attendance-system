function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="logo">QR</div>

          <h1>QR Attendance</h1>

          <p>A smarter and faster way to manage student attendance.</p>
        </div>

        <div className="auth-card">
          <h2>{title}</h2>
          <p className="subtitle">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
