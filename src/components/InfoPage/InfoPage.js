import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <Typography component='p'>
    <Box textAlign='right' m={4}>
    Do you ever forget exactly which project you have that extra half skein of thread in? I do!
      Enter Cross Stitch Buddy, an app that keeps track of where evry single last half-skein of thread is!
      Starting a new project, and you're wondering if you have ten skeins of that color stashed somewhere (but where?)
      or if you should actually go buy some?
      There's a sale on skeins of thread, so you really want to take advantage, but you don't have time to dig through
      all the projects you're planning on doing some day to figure out which thread to buy?
      Working on a project and you ran out of thread, but it's the middle of quarantine so you can't just run down 
      to the shop and get another skein, and you don't want to dig through all of your projects one by one to see if
      you can find a bit more? Cross stitch buddy to the rescue! Cross stitch buddy can tell you exactly how much thread you have, and which project
      it's in. 
      Info Page. Here's where I should have stuff about why the project and what I used to make It.
      an image of a bunch of cross stitch threads
      react, redux, redux-sagas, material-ui 
    </Box>
  </Typography>
);

export default InfoPage;
