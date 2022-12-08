import React from 'react';

import axios from "axios";

import { API_URL } from '../constants';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import logo from "../assets/images/logo.png";
import { Stack } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const WIDTH = 650;
  
const Home = () => {
  const [lang, setLang] = React.useState('');
  const [text, setText] = React.useState('');

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  async function getModel(lang) {
    try {
      const response = await axios.get("toxic_detection/models/"+lang);
      console.log("Response");
      console.log(response);
      return response;
    } catch (error) {
        console.error(error);
    }
  }

  async function detectToxicSpans(origText) {
    try {
      const item = {text: origText}
      const { response } = axios.post(API_URL+"detect", item)
                          .then((response) => {
                            console.log(response);
                            console.log(response.data);
                            setText(response.data);
                          })
                          .catch(err => {
                            console.log(err);
                          });      
    } catch (error) {
        console.error(error);
    }
  }

  const handleSubmit = async (event) => {
    console.log(lang + " " + text);
    //const model = getModel(lang);
    detectToxicSpans(text);
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
              onChange={handleLanguageChange}>
              <MenuItem value={"en"}>English</MenuItem>
            </Select>
          </FormControl>
          <TextField
              helperText="Please enter the text you want to censure"
              variant="outlined"
              multiline
              value={text}
              id="input-text"
              minRows={20}
              maxRows={20}
              onChange={handleTextChange}
              sx={{
                backgroundColor: 'white'
              }}
              />
          <Button
            variant="contained"
            id="button"
            onClick={handleSubmit}>
            Detect  
          </Button>
      </Stack>
    </Box>
  );
};
  
export default Home;