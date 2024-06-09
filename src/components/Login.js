import { backendIp } from "../globals";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const userContext = useContext(UserContext);

  // BEWARE: Might have to tweak route and or address
  async function logIn(e){
    e.preventDefault();
    const res = await fetch(`http://${backendIp}:3001/users/login`, {
      method: "POST",
      credentials: "include",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const data = await res.json();
    if(data._id !== undefined){
      userContext.setUserContext(data);
    } else {
      setUsername("");
      setPassword("");
      setError("Invalid username or password");
    }
  }

  /*
  async function logIn(e) {
    e.preventDefault();
    setError("The error message is working!!")
    console.log(`Username: ${username}\nPassword: ${password}`);
  }
  */

  // const sendVerificationCode = () => {
  //   const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     }
  //   }, auth);
  //
  //   signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
  //     .then((confirmationResult) => {
  //       setVerificationId(confirmationResult.verificationId);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };
  //
  // const verifyCode = () => {
  //   const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
  //   signInWithCredential(auth, credential)
  //     .then((result) => {
  //       userContext.setUserContext(result.user);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

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
            onChange={(e) => (setUsername(e.target.value))}
            sx={{ mb: 2 }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
            sx={{ mb: 2 }}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => (setPhoneNumber(e.target.value))}
            sx={{ mb: 2 }}
          />
          <Button type="submit" size="md" fontSize="lg">
            Log in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
