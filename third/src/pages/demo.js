import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './style.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3446567/pub_5ecd52c2710c162dc70d87c2_5ed2292c66114c67b34fa9df/scale_1200" alt="img" className="Seaside"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h1 className="HeadingText">
              Heading 1
            </h1>
            <h3 className="HeadingText">
              Heading 3
            </h3>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}