import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import VStack from "@mui/joy/Stack";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  async function logIn(e) {
    e.preventDefault();

    if (!username) {
      alert("Enter a username");
      return;
    }
    if (!password) {
      alert("Enter a password");
      return;
    }

    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();
    if (data._id !== undefined) {
      userContext.setUserContext(data);
    } else {
      setUsername("");
      setPassword("");
      alert("Couldn't log in");
      return;
    }
  }

  return (
    <Box p={4} rounded="md" bg="white" boxShadow="md">
      <form onSubmit={logIn}>
        {userContext.user ? <Navigate replace to="/" /> : ""}
        <VStack spacing={4}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Log in
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Login;
