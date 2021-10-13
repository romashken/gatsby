import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: 'grey' }}>
                {props.icon}
            </Avatar>
        }
        title={props.title}
      />
      <CardMedia
        component="img"
        height="auto"
        image={props.dishPic}
        alt="dish"
      />
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
    </Card>
  );
}
