import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
  Call,
  Close,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  X,
  YouTube,
  Menu,
} from "@mui/icons-material";
import "../../styles/Navbar.css";
import { Logo } from "../../assets";
import useViewport from "../../Context/useViewPort";

const pages = [
  "Home",
  "About",
  "Career",
  "Event",
  "Contact Us",
  "Login/ Signup",
];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const Navbar = () => {
  const { isMobile } = useViewport();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState(pages[0]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text) => (
          <ListItem button key={text} onClick={() => handlePageClick(text)}>
            <ListItemText primary={capitalizeFirstLetter(text)} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className="space-bw bg-black">
            <div className="icon">
              <Instagram sx={{ color: "#fff", width: 22 }} />
              <Facebook sx={{ color: "#fff", width: 22 }} />
              <YouTube sx={{ color: "#fff", width: 22 }} />
              <LinkedIn sx={{ color: "#fff", width: 22 }} />
              <X sx={{ color: "#fff", width: 18 }} />
            </div>
            <div
              className="flex-row center"
              style={{ gap: 10, marginRight: 40 }}
            >
              <span className="call-Us ml-10 center">
                <Call sx={{ fontSize: 15, marginRight: "5px" }} /> +91
                9974355873
              </span>{" "}
              <span style={{ height: 24 }}> |</span>
              <span className="call-Us center ">
                <Email
                  sx={{ fontSize: 15, marginLeft: "1px", marginRight: "3px" }}
                />
                contact:ojeevan@gmail.com
              </span>
            </div>
          </div>
        </Box>

        <Container>
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {pages.slice(0, 3).map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    borderBottom:
                      activePage === page ? "3px solid green" : "none",
                  }}
                  onClick={() => handlePageClick(page)}
                >
                  {capitalizeFirstLetter(page)}
                </Button>
              ))}

              <img src={Logo} alt="Logo" width={120} />

              {pages.slice(3).map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    borderBottom:
                      activePage === page ? "3px solid green" : "none",
                  }}
                  onClick={() => handlePageClick(page)}
                >
                  {capitalizeFirstLetter(page)}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }}}>
              <div className="logo">
                <img src={Logo} alt="Logo" width={200} height={70} />
              </div>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!drawerOpen)}
              >
                {drawerOpen ? <Close sx={{ color: "#000" }} /> : <Menu />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Navbar;
