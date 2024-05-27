import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  async function logIn(e) {}

  return (
    <div style={{ width: "50%" }}>
      <form onSubmit={logIn}>
        {userContext.user ? <Navigate replace to="/" /> : ""}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          name="submit"
          value="Log in"
          style={{ margin: "auto", display: "block" }}
        />
      </form>
    </div>
  );
}

export default Login;
