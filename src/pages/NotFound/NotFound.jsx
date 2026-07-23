import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#111",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;