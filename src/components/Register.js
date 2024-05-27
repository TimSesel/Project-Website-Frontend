import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import Input from "@mui/joy/Input";
import VStack from "@mui/joy/Stack";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function register(e) {
    e.preventDefault();
    console.log(
      `Email: ${email}\nUsername: ${username}\nPassword: ${password}`,
    );
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
