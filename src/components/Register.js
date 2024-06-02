import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import VStack from "@mui/joy/Stack";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function register(e) {
    e.preventDefault();

    if (!email) {
      alert("Enter an email");
      return;
    }
    if (!username) {
      alert("Enter a username");
      return;
    }
    if (!password) {
      alert("Enter a password");
      return;
    }

    e.preventDefault();
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });

    const data = await res.json();
    if (data._id !== undefined) {
      window.location.href = "/";
    } else {
      setUsername("");
      setPassword("");
      setEmail("");
      alert("Couldn't register");
      return;
    }
  }

  return (
    <Box p={4} rounded="md" bg="white" boxShadow="md">
      <form onSubmit={register}>
        <VStack spacing={4}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Register;
