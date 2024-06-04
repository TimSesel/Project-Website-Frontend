import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from "./userContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Map from "./components/Map";
import Box from '@mui/joy/Box';
import { CssVarsProvider, ThemeProvider, extendTheme } from '@mui/joy/styles';

function App() {
  const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
  const updateUserData = (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
  }

  const theme = extendTheme({
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            50: '#F3E5F5',
            100: '#E1BEE7',
            200: '#CE93D8',
            300: '#BA68C8',
            400: '#AB47BC',
            500: '#9C27B0',
            600: '#8E24AA',
            700: '#7B1FA2',
            800: '#6A1B9A',
            900: '#4A148C',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider>
      <CssVarsProvider theme={theme} defaultMode="dark">
        <BrowserRouter>
          <UserContext.Provider value={{
            user: user,
            setUserContext: updateUserData
          }}>
            <div className='App'>
              <Header title="NOISE POLLUTION"></Header>
              <Box component="section" sx={{ m: '2%', p: 2, bgcolor: 'background.level1', borderRadius: 16 }}>
                <Routes>
                  <Route path="/" exact element={<Map />}></Route>
                  <Route path="/login" exact element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/logout" element={<Logout />}></Route>
                </Routes>
              </Box>
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </CssVarsProvider>
    </ThemeProvider>
  );
}

export default App;
