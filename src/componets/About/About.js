import { Grid, Typography } from "@mui/material";
import React from "react";
import "../../styles/About.css";
import { AboutBook, Clippathgroup } from "../../assets";
import useViewport from "../../Context/useViewPort";
function About() {
  const { isMobile } = useViewport();
  return (
    <div className={`p-v`}>
      <div className="mt-200">
        <Typography variant="h3" className="main-text center about">
          About Us
        </Typography>
        <Typography variant="h6" className="center mt-10">
          સાહિત્ય - સિનેમા - ટેક્નોલોજી - સ્વાસ્થ્યઃ ઓ’જીવનની ડિજિટલ દુનિયામાં
          તમારું સ્વાગત છે.
        </Typography>
      </div>
      <Grid container spacing={0}>
        <Grid item xl={5} md={5} xs={12}>
          <div className="cliper">
            <img
              src={Clippathgroup}
              alt="cliper"
              width={isMobile ? 100 : 200}
              className="spinning"
            />
          </div>
          <img
            src={AboutBook}
            alt="book"
            className="book mt-50 center"
            width={isMobile ? 300 : 500}
          />
        </Grid>
        <Grid item xl={7} md={7} xs={12}>
          <div className="center-content">
            <Typography variant="h6" className="center">
              ગુજરાતના પ્રતિષ્ઠિત સામયિક ઓ’જીવનની આ ડિજિટલ દુનિયાનો ઉદ્દેશ્ય
              પ્રવર્તમાન સમયે નવો ચીલો ચાતરી, વાંચનની અવનવી સામગ્રી પીરસવાનો છે.
              સાહિત્ય, સિનેમા, ટેક્નોલોજી અને સ્વાસ્થ્ય સહિતનો વાંચનથાળ, નવી
              દૃષ્ટિ અને શૈલીથી એ વાચકો આગળ ધરશે. અહીં રસનિષ્પતિ કરતા લેખો
              વાંચવા મળશે. ઉપરાંત ઇતિહાસ, ફિટનેસ, અધ્યાત્મ તથા અત્યાર સુધી
              વણખેડાયેલા વિષયોને સ્પર્શવાનો આ વેબસાઇટનો હેતુ છે.
            </Typography>
            <Typography variant="h6" className="center mt-20">
              આ સિવાય સમયાંતરે ગુજરાતના પ્રતિષ્ઠિત લેખકોની કલમે નવલકથા તથા ટૂંકી
              વાર્તાના સાહિત્યિક સ્વરૂપનું આચમન તો ખરું જ. માત્ર સમાચારો પીરસી
              માહિતી આપવાનો અમારો સબબ નથી, પરંતુ વર્તમાનમાં બનેલી ઘટનાનો નવો
              ‘કોણ’ કાઢી વાચકોની આગળ રાખવાનો પ્રયત્ન કરીશું.
            </Typography>
            <Typography variant="h6" className="center mt-20">
              ઓ’જીવન મૅગેઝિનની થીમ મુજબ અહીં – વેબ સાઇટ ઉપર પણ તમને તમારું જીવન
              જડશે. નાનામોટા સમાચારોથી કરીને દીર્ઘ આર્ટિકલ્સ, ફિચર અને
              એક્સક્લુઝિવ સ્ટોરીઝ તમને અહીં વાંચવા મળશે.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <section>
        <div className="our-team">
          <Typography variant="h3" className="center mt-50">
            Our Team
          </Typography>
        </div>

        <Typography variant="body1" className="center">
          જો તમારે ઝડપથી જવું હોય તો એકલા જાવ અને જો દૂર સુધી જવું હોય તો સાથે
          ચાલો.
          <span>
            <b>~આફ્રિકન કહેવત</b>
          </span>
        </Typography>
      </section>
    </div>
  );
}

export default About;
