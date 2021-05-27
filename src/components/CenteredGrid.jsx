import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function CenteredGrid() {
  const pictureCount = 16

  const skeletonList = Array.from({length: pictureCount}, () => null)
  const [randomPictureList, setRandomPictureList] = useState(skeletonList)

  useEffect(() => {
    setRandomPictureList(Array.from({length: pictureCount}, () => `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`))  
  }, []);

  return (
    <div>
      <h2>Random Picture Gallery</h2>
      <Grid container spacing={3}>
        {randomPictureList.map((pic) => (
          <Grid item xs={12} md={6} lg={3}>
            <Paper style={{position: 'relative'}}>
              <img src={pic} alt={'...'} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
