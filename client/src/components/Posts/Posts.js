import React from 'react';
import { Grid, CircularProgress, AppBar } from "@material-ui/core";
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <p>
      {" "}
      <AppBar className={classes.appBar} position="static" color="inherit">

      <h2  >
        No Memories Found
      </h2>
      </AppBar>
      <CircularProgress />
    </p>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
