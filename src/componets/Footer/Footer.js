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
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Send,
  X,
  YouTube,
} from "@mui/icons-material";

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
        <div className="footer-logo center mb-20">
          <img
            src={FooterLogo}
            alt="footerLogo"
            width={300}
            className="mb-20"
          />
        </div>
        <Divider
          sx={{
            bgcolor: "#fff",
            height: 2,
            width: "98%",
            margin: " 20px auto",
          }}
        />
        <Grid container spacing={2}>
          <Grid item xl={3.5} md={3.5} xs={12}>
            <Typography variant="h6" className="c-white ml-20 mt-10">
              તમે આજીવન પ્રગતિની રાહથી માત્ર એક કદમ દૂર છો!
            </Typography>
          </Grid>
          <Grid item xl={3.5} md={3.5} xs={12}>
            <div className="email-sec">
              <TextField
                fullWidth
                className="customTextField"
                placeholder="Enter your Email"
                label="Enter your Email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Grid>
          <Grid item xl={5} md={5} xs={12}>
            <div className="center nav mt-10">
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component="a"
                  className="navIt center"
                >
                  {item}
                </Typography>
              ))}
            </div>
          </Grid>
        </Grid>
        <Divider
          sx={{
            bgcolor: "#fff",
            height: 2,
            width: "98%",
            margin: " 20px auto",
          }}
        />
        <section>
          <div className="space-bw">
            <div className="footer-icon">
              <Instagram sx={{ color: "#fff", fontSize: 30 }} />
              <Facebook sx={{ color: "#fff", fontSize: 30 }} />
              <YouTube sx={{ color: "#fff", fontSize: 30 }} />
              <LinkedIn sx={{ color: "#fff", fontSize: 30 }} />
              <X sx={{ color: "#fff", width: 30 }} className="center" />
            </div>
            <div className="location">
              <span className="location-text">
                <LocationOn /> 1202, Silver Trade Center, Uttran, Surat, Gujarat
                394105
              </span>
              <span className=" location-text mt-10">
                <Call sx={{ fontSize: 20, marginRight: "5px" }} /> +91
                9974355873
              </span>
              <span className=" location-text mt-10">
                <Email
                  sx={{ fontSize: 20, marginLeft: "1px", marginRight: "3px" }}
                />
                contact:ojeevan@gmail.com
              </span>
            </div>
          </div>
          <div>
            <Divider sx={{ bgcolor: "#fff", height: 1, mt: 2 }} />
            <Typography variant="body1" className="c-white mt-10 center last">
              @OJEEVAN MEDIA LLP
            </Typography>
            <Divider sx={{ bgcolor: "#fff", height: 1, mt: 2 }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
