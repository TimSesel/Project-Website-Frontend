import * as React from "react";
import Box from "@mui/joy/Box";
import Home from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

function Header(props) {
  return (
    <header>
      <Typography level="h1" sx={{ color:'primary.100', textAlign: 'center', mb: '25px', mt: '25px' }}>
        {props.title}
      </Typography>
      <Box component="nav" aria-label={props.title} sx={{ flexGrow: 1 }}>
        <List role="menubar" orientation="horizontal" variant="outlined">
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component={Link}
              to="/"
              aria-label="Domov"
            >
              <Home />
            </ListItemButton>
          </ListItem>
          <UserContext.Consumer>
            {(context) =>
              context.user ? (
                <>
                  <ListDivider />
                  <ListItem role="none">
                    <ListItemButton
                      role="menuitem"
                      component={Link}
                      to="/profile"
                    >
                      <AccountCircle />
                    </ListItemButton>
                  </ListItem>
                  <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <ListItemButton
                      role="menuitem"
                      component={Link}
                      to="/logout"
                    >
                      Logout
                    </ListItemButton>
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <ListItemButton
                      role="menuitem"
                      component={Link}
                      to="/login"
                    >
                      Login
                    </ListItemButton>
                  </ListItem>
                  <ListDivider />
                  <ListItem role="none">
                    <ListItemButton
                      role="menuitem"
                      component={Link}
                      to="/register"
                    >
                      Registration
                    </ListItemButton>
                  </ListItem>
                </>
              )
            }
          </UserContext.Consumer>
        </List>
      </Box>
    </header>
  );
}

export default Header;
