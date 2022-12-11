import React from 'react';

import axios from "axios";

import { API_URL } from '../constants';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/SendRounded';
import ThumbDownIcon from '@mui/icons-material/ThumbDownRounded';
import ThumbUpIcon from '@mui/icons-material/ThumbUpRounded';
import Box from "@mui/material/Box";
import logo from "../assets/images/logo.png";
import { List, ListItem, Divider, Grid } from '@mui/material';
import { PulseLoader } from 'react-spinners';
import IntroductionGrid from '../components/IntroductionGrid';
import DOMPurify from 'dompurify'

const WIDTH = 800

function highlightText(text, spans) {
  let highlightedText = "";
  let inside = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!inside && spans.includes(i)) {
      highlightedText += "<span style='color:red;font-weight:bold;'>";
      inside = true;
    }
    else if (inside && !spans.includes(i)) {
      highlightedText += "</span>";
      inside = false;
    }
    highlightedText += char;
  }
  if (inside) {
    highlightedText += "</span>";
  }
  console.log(highlightedText);
  return highlightedText;
}

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');
  const [isIntroShown, setIsIntroShown] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  async function detectToxicSpans(origText) {
    try {
      const item = { text: origText }
      const { response } = axios.post(API_URL + "detect", item)
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          var highlightedText = highlightText(origText, response.data)
          setItems([...items, highlightedText]);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  }

  function submit() {
    setIsIntroShown(false);
    setLoading(true);
    detectToxicSpans(text);
    setText('');
  }

  const handleSubmit = async (event) => {
    submit();
  }

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      submit();
    }
  }

  const handleApprove = async (event) => {

  }

  const handleReject = async (event) => {

  }

  return (
    <Box align="center">
      <a href="/">
        <img
          alt="Bleeptox logo"
          src={logo}
          style={{
            width: 350,
            marginTop: 20,
            marginBottom: 20
          }} />
      </a>
      {isIntroShown ? (<IntroductionGrid id="introduction-grid" />) : (<div />)}
      <List
        id="text-list"
        flex-direction="column"
        display="flex"
        height="100%"
        alignItems="center">
        {items.map((item, index) => (
          <Box
            width="100%"
            display="block"
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? 'white' : '#F7F7F8',
              marginRight: 3,
              marginLeft: 3
            }}>
            <ListItem display="flex" key={index} style={{ maxWidth: WIDTH }}>
              <Grid container>
                <Grid item xs={10}>
                  <ListItem>
                    <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}></div>
                  </ListItem>
                  {/* primary={<div>Hola</div>} style={{ wordWrap: "break-word" }} /> */}
                </Grid>
                <Grid item xs={2}
                  justify="flex-end"
                  alignItems="center">
                  <IconButton
                    id="approve"
                    variant="contained"
                    onClick={handleApprove}>
                    <ThumbUpIcon fontSize='small' />
                  </IconButton>
                  <IconButton
                    id="reject"
                    variant="contained"
                    onClick={handleReject}>
                    <ThumbDownIcon fontSize='small' />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </Box>
        ))}
        <br></br>
        <PulseLoader
          size={10}
          color={'#176FB8'}
          loading={isLoading}
        />
      </List>
      <TextField
        id="input-text"
        variant="outlined"
        value={text}
        label="Type something here"
        minRows={1}
        maxRows={20}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        elevation={3}
        style={{
          maxWidth: WIDTH,
          position: 'fixed',
          bottom: 20,
          left: 0,
          right: 0,
          margin: 'auto',
          backgroundColor: 'white'
        }}
        InputProps={{
          endAdornment:
            <IconButton
              id="send-button"
              onClick={handleSubmit}>
              <SendIcon fontSize='small' />
            </IconButton>
        }}
      />
    </Box>
  );
};

export default Home;