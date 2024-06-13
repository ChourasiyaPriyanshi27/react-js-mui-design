import { Grid, Typography ,Box} from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Grid container direction='row' alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography>
            A BlissFull Content
        </Typography>
        <Typography>
            A BlissFulljnkmlbhknm
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent='center'>
        <Box component="img" src="https://images.pexels.com/photos/25409665/pexels-photo-25409665/free-photo-of-hand-holding-brownie-on-fork.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  sx={{height:'30rem',width:'30rem'}} />

       
      </Grid>
    </Grid>
  );
};

export default HeroSection;
