import React from 'react';

import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import logo from "../assets/images/logo.png";
import { Stack } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const WIDTH = 650;
  
const Home = () => {
  const [lang, setLang] = React.useState('');

  const onChange = (event) => {
    setLang(event.target.value);
  }

  const onClick = (event) => {
    console.log(event);
  }

  return (
    <Box align="center">
      <div style={{textAlign: "center", 
                   width: "100%" }} >
        <img 
          alt="Bleeptox logo" 
          src={logo}
          style={{width: WIDTH,
                  marginTop: 50,
                  marginBottom: 50}} />
      </div>
      <Stack 
        width={WIDTH}
        spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Select language"
              onChange={onChange}>
              <MenuItem value={"en"}>English</MenuItem>
            </Select>
          </FormControl>
          <TextField
              helperText="Please enter the text you want to censure"
              variant="outlined"
              multiline
              id="input-text"
              minRows={20}
              maxRows={20}
              sx={{
                backgroundColor: 'white'
              }}
              />
          <Button
            variant="contained"
            id="button"
            onClick={onClick}>
            Detect  
          </Button>
      </Stack>
    </Box>
  );
};
  
export default Home;