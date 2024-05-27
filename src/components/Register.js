import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const userContext = useContext(UserContext);

  /*
  // BEWARE: Might have to tweak route and or address
  async function Register(e){
    e.preventDefault();
    const res = await fetch("http://localhost:3001/users", {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password
      })
    });
    const data = await res.json();
    if(data._id !== undefined){
      window.location.href="/";
    }
    else{
      setUsername("");
      setPassword("");
      setEmail("");
      setError("Registration failed");
    }
  }
  */

  async function register(e) {
    e.preventDefault();
    setError("The error message is working!!")
    console.log(
      `Email: ${email}\nUsername: ${username}\nPassword: ${password}`,
    );
  }

  return (
    <Card sx={{ p: 5 }}>
      <Typography level="h2" sx={{ color:'primary.100', textAlign: 'center' }}>
          Register
      </Typography>
      <CardContent sx={{ p: 2, borderRadius: 16, alignSelf: 'center', textAlign: 'center' }}>
        {userContext.user ? <Navigate replace to="/" /> : ""}
        <form onSubmit={register}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            
          />
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
            sx={{ mb: 2 }}
          />
          <hr/>
          <Typography level="body-md" sx={{ color:'danger.400', textAlign: 'center', m: 2 }}>
            {error}
          </Typography>
          <Button type="submit" size="md" fontSize="lg">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;
