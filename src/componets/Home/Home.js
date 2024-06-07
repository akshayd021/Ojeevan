import React from "react";
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { Charkho, Clouds, Monuments, design, man, word } from "../../assets";
import Carousel from "./Carousel";
import "../../styles/Home.css";
import ImageCarousel from "./ImageCarousel";
import AvtarCaursel from "./AvtarCarousel";

const Home = () => {
  return (
    <div className=" mt-50">
      <Grid container spacing={0}>
        <Grid item xl={6} md={6} xs={12}>
          <Typography variant="h4" className="text-main pl-50">
            ઓ’જીવનમાં તમારું સ્વાગત છે.
          </Typography>
          <Typography variant="body1" className="mt-10 pl-50">
            ઓ’જીવન મૅગેઝિનની ડિજિટલ દુનિયામાં તમારું સ્વાગત છે. ડિજિટલ
            કન્ટેન્ટના રસથાળ ઉપરાંત અહીં તમને ઓ’જીવનની ઇવેન્ટ્સ, લાઇવ
            પ્રોગ્રામ્સ તથા મૅગેઝિન વિશેની માહિતી મળશે. ટૂંકા ગાળામાં લોકભોગ્ય
            બની ચૂકેલા ઓ’જીવન મૅગેઝિનનું સબસ્ક્રિપ્શન તમે અહીંથી ભરી શક્શો.
            અત્યારે ચોતરફથી કન્ટેન્ટ ઠલવાઈ રહ્યું છે, એવામાં, ક્વૉલિટી વાંચો,
            વંચાવો અને માણો..!
          </Typography>
          <div className="slider mt-10">
            <Carousel />
          </div>
          <img
            src={Monuments}
            alt="Monuments"
            width={1000}
            height={600}
            className="patel"
          />
        </Grid>
        <Grid item xl={6} md={6} sx={12}>
          <div className="cloud mt-70">
            <ImageCarousel />
            <div className="silder-text center mt-10">
              <Typography
                variant="h6"
                sx={{
                  display: "inline-block",
                  borderBottom: "2px solid #92288d",
                  paddingBottom: "8px",
                }}
              >
                મેગેઝિન ખરીદવા અહીં કિલક કરો
              </Typography>
            </div>
            <div className="center mt-10">
              <Button variant="contained" className="btn center">
                Magazine
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "rgb(242 146 27)", height: 10 }} />
      <img src={design} alt="degin" height={50} />
      <section>
        <div className="second center flex-col">
          <img src={word} alt="text" width={300} />
          <Typography variant="h4" className="text-green font-700 mt-10">
            આખેટ
          </Typography>
          <Typography variant="h6" className="font-700 mt-10">
            અર્થ :
          </Typography>
          <Typography variant="h6" className="text-green mt-10">
            શિકાર, મૃગયા
          </Typography>
          <Typography variant="body1" className="design center pd-50 mt-10">
            આખેટ એ મૂળ તો હિન્દી ભાષાનો શબ્દ છે. જે અશ્વિની ભટ્ટની એ જ નામથી
            ચર્ચાયેલી અને લોકપ્રિય બનેલી નવલકથાનું શીર્ષક બન્યું. “આખેટ” શબ્દ
            ગુજરાતીમાં એ રીતે ઓળખાયો. આખેટનો અર્થ થાય શિકાર. મૃગયા. બીજા બે અર્થ
            છે બીક અને ભય. આખેટને જ મળતો આવતો એક બીજો શબ્દ એટલે આખેટક. જો આખેટ
            એટલે શિકાર તો આખેટક એટલે કે શિકારી. શિકારી કૂતરાઓને પણ આખેટક શબ્દથી
            ઓળખવામાં આવે છે.
          </Typography>
        </div>
        <img src={design} alt="degin" height={50} />
      </section>
      <section>
        <div className="blue">
          <Typography variant="h3" className="text-white center pt-20">
            ઓ’જીવન શું છે?
          </Typography>
          <Grid container spacing={0}>
            <Grid item xl={6} md={6} xs={12} className="pl-50">
              <img src={Charkho} alt="gif" width={500} />
            </Grid>
            <Grid item xl={6} md={6} xs={12}>
              <Typography variant="h6" className="text-white mt-20">
                <span className="text-green font-28 ">માણસ</span> થાકી જાય છે.
                થાક એ બીજું કંઈ નહીં, પણ જિંદગીની સામે વ્યક્તિનાં પરાસ્ત થઈ
                ગયાનો અદૃશ્ય સંકેત છે. રોજબરોજ એકધારું અને એકનું એક કામ! એમાંથી
                છૂટકારો મળે ત્યાં બીજી કેટલીક સમસ્યાઓ ડોળા કાઢી ઊભી હોય. એની
                સામે લડવા પણ કંઈક જોઈએ. કંઈક જ્ઞાનવર્ધક.
              </Typography>
              <Typography variant="h6" className="text-white mt-20 ">
                ખરી માહિતી. પણ તે એવું કે, જેમાં મનોરંજનનોય સુમેળ સધાયો હોય. અને
                એ પ્રેરણાનું પ્રવર્તમાન સરનામું ઓ’જીવન છે. એ તમારી સુષુપ્ત થઈ
                ગયેલી ઊર્જાને ગદ્યના માધ્યમથી ધક્કો મારવાનું કાર્યં કરે છે. એ
                ગદ્યમાં પણ કાવ્ય અને ઉદ્દીપનની લીલા છે. તે તમને તરોતાજા રાખે છે.
                રિ-ફ્રેશ કરે છે. બીજા શબ્દોમાં એક પ્રકારનું ઈજન અને ઑક્સિજન એટલે
                ઓ’જીવન!
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
      <section>
        <div className="bg-green">
          <div className="bg-white center pt-50 mt=50">
            <Typography variant="body1">
              આ કાળઝાળ સમયમાં સામયિક શરૂ કરવા બદલ તેમજ સામયિકના એક ઉત્તમ, બેનમૂન
              પ્રોડક્શન બદલ દિલથી અભિનંદન. અંકમાંથી પસાર થયો, ખાસ તો ‘આજીવન
              પ્રગતિની રાહે...’માં પંચમહાભૂતની વિગતોથી પ્રભાવિત થવાયું છે. સુજ્ઞ
              વાચકો માટે ઓછામાં ઘણું કહેવાયું છે. આવું કહેવું એ પણ સૂઝ-સમજ
              સાથેની એક આગવી કળા છે. આ સિવાય લગભગ તમામ આર્ટિકલ વાંચ્યા. લેખકો,
              સામે પત્રકાર, સર્વેએ સારું લખ્યું છે. દરેક લેખ નવોન્મેષથી ભરપૂર
              હોવાથી વાચકને અસર કરે એવા છે.
            </Typography>
          </div>
          <div className="center">
            <img
              alt="Remy Sharp"
              src={man}
              className="slider-text center avtar"
            />
          </div>

          <Typography variant="h6" className="center mt-10 c-blue">
            ધૈવત ત્રિવેદી
          </Typography>
          <Typography variant="body1" className="center c-white">
            વરિષ્ઠ પત્રકાર, નવલકથાકાર (અમદાવાદ)
          </Typography>
        </div>
        {/* <AvtarCaursel /> */}
      </section>
    </div>
  );
};

export default Home;
