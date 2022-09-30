import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  
const Home = () => {
  return (
    <div id="app">
      <div>
        <TextField
          helperText="Please enter the text you want to censure"
          variant="outlined"
          label="Example text"
          id="input-text" />
      </div>
      <div>
        <Button
          variant="contained"
          id="button">
        Censure  
        </Button>
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Censured text"
          id="output-text"
          inputProps={
            { readOnly: true, }
          } />
      </div>
    </div>
  );
};
  
export default Home;