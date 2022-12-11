import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import PsychologyIcon from '@mui/icons-material/PsychologyRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import image1 from "../assets/images/logo.png";
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const IntroductionGrid = () => {
    return (
        <Box sx={{ maxWidth: 800 }}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                            What is Bleeptox?
                            </Typography>
                            <Typography variant="body1" textAlign="justify" marginTop={1} marginBottom={1}>
                            Bleeptox is an AI system that detects toxic characters in text.
                            Online conversations have become key to communicate with our family, friends and job mates,
                            or socialize through social networks, streaming chats or games. Being able to moderate all this 
                            digital content is crucial in order to promote healthy online conversations and discussions.
                            </Typography>
                            <Divider />
                            <Typography variant="body1" textAlign="justify" marginTop={1}>
                            Based on Deep Learning, it consists of a multi-depth DistilBERT
                            model, a fast and light Transformer which uses embeddings from different 
                            layers. Trained with a dataset containing
                            lots of annotated posts and comments.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent> 
                            <PsychologyIcon fontSize='small' />
                            <Typography variant="h6" component="div">
                            Capabilities
                            </Typography>
                            <Typography variant="body1" textAlign="justify" marginTop={1} marginBottom={1}>
                            AI allows us to be one step ahead of naïve toxic detectors. Our system
                            not only focuses on words but takes into account all context. This allows us to 
                            detect subjectivity, irony and toxic expressions formed by multiple words that may not be 
                            toxic individually. 
                            </Typography>
                            <Divider />
                            <Typography variant="body1" textAlign="justify"  marginBottom={1}  marginTop={1}>
                            Able to detect those words that have been written in an ingenious way to avoid simple 
                            and naïve techniques (e.g. $tup1d, 1d10t, etc.). 
                            </Typography>
                            <Divider />
                            <Typography variant="body1" textAlign="justify"  marginTop={1}>
                            Able to work in Near Real Time (NRT), which is crucial for almost all applications
                            that involve online conversations.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>  
                            <WarningRoundedIcon fontSize='small' />
                            <Typography variant="h6" component="div">
                            Limitations
                            </Typography>
                            <Typography variant="body1" textAlign="justify" marginTop={1} marginBottom={1}>
                            Our solution is still under development and may occasionally produce incorrect or biased 
                            detections.
                            </Typography>
                            <Divider />
                            <Typography variant="body1" textAlign="justify" marginTop={1}>
                            As of now it only supports English, although we want to expand it for other languages.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntroductionGrid;