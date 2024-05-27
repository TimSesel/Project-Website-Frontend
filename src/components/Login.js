import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const userContext = useContext(UserContext);

  async function logIn(e) {
    e.preventDefault();
    setError("The error message is working!!")
    console.log(`Username: ${username}\nPassword: ${password}`);
  }

  return (
    <Card sx={{ p: 5 }}>
      <Typography level="h2" sx={{ color:'primary.100', textAlign: 'center' }}>
          Login
      </Typography>
      <CardContent sx={{ p: 2, borderRadius: 16, alignSelf: 'center', textAlign: 'center'}}>
        <form onSubmit={logIn}>
          {userContext.user ? <Navigate replace to="/" /> : ""}
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr/>
          <Typography level="body-md" sx={{ color:'danger.400', textAlign: 'center', m: 2 }}>
            {error}
          </Typography>
          <Button type="submit" size="md" fontSize="lg">
            Log in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
