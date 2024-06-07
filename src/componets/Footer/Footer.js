import React from "react";
import { FooterLogo } from "../../assets";
import "../../styles/Footer.css";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";

function Footer() {
  const navItems = [
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms of Use",
    "Refund & Return Policy",
    "Shipping Policy",
  ];
  return (
    <div>
      <div className="bg-footer">
        <div className="footer-logo center">
          <img src={FooterLogo} alt="footerLogo" width={300} />
        </div>
        <Divider sx={{ bgcolor: "#fff", height: 2, mt: 5, mb: 2 }} />
        <Grid container spacing={8}>
          <Grid item xl={6} md={6} xs={12}>
            <Typography variant="h6" className="c-white">
              તમે આજીવન પ્રગતિની રાહથી માત્ર એક કદમ દૂર છો!
            </Typography>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <Box
              className="email"
              sx={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <TextField
                fullWidth
                placeholder="Enter your Email"
                label="Enter your Email"
                variant="outlined"
                color={"primary"}
                className="email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Send style={{ color: "white" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <div className="center nav">
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="a"
                  className="navIt"
                  //   href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {item}
                </Typography>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
