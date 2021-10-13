import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './style.css';
import Button from '@mui/material/Button';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Layout from "../components/navbar/layout";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Layout>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <p className="HeadingText">
                Pinboard notification
            </p>
            <p>
            <Button
                variant="contained"
                startIcon={<CallToActionIcon color="secondary" />}
                onClick={() => {
                    alert('clicked');
                }}
                >
                Click here!
            </Button>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <p className="HeadingText">
                Pinboard notification
            </p>
            <p>
            <Button
                variant="contained"
                startIcon={<AccessibilityNewSharpIcon color="secondary" />}
                onClick={() => {
                    alert('clicked');
                }}
                >
                Click here!
            </Button>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <p className="HeadingText">
                Pinboard notification
            </p>
            <p>
            <Button
                variant="contained"
                startIcon={<AccountCircleSharpIcon color="secondary" />}
                onClick={() => {
                    alert('clicked');
                }}
                >
                Click here!
            </Button>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
}