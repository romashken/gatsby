import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './style.css';
import Layout from "../components/navbar/layout";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: theme.spacing(90),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Layout>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
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
        <Grid item xs={6}>
          <Item className="backpic"/>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
}