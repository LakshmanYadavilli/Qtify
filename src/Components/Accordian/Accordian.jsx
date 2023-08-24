import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = () => {
  return (
    <div>
      <Accordion
        sx={{
          width: "1135px",

          border: "1px solid #FFFFFF",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: "32px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "black" }}
        >
          <Typography
            sx={{
              height: "40px",
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWweight: "500px",
              lineHeight: "30px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            Is QTify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              height: "40px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWweight: "500px",
              lineHeight: "27px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "1135px",

          border: "1px solid #FFFFFF",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: "32px" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ bgcolor: "black", margin: "0px auto" }}
        >
          <Typography
            sx={{
              height: "40px",
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWweight: "500px",
              lineHeight: "30px",
              letterSpacing: "0px",
              textAlign: "left",
              //   margin: "0px auto",
            }}
          >
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ margin: "0px auto" }}>
          <Typography
            sx={{
              height: "40px",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWweight: "500px",
              lineHeight: "27px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
