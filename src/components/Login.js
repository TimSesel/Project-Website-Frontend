import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import VStack from "@mui/joy/Stack";
import { Container } from "@mui/system";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  async function logIn(e) {
    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
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
