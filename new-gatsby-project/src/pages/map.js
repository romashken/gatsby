import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Layout from "../components/navbar/layout";

const colors = ['green', 'red', 'orange', 'violet', 'blue'];
const listItems = colors.map((color) =>
  <Chip
    color="info" 
    label={color}
  />
);

export default function Numbers() {
    return(
        <Layout>
            <Stack 
                direction="column"
                justifyContent="left"
                alignItems="flex-start"
                spacing={3}
            >
                    {listItems}
            </Stack>    
        </Layout>
    );
}
