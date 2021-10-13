import React from 'react';
import Card from '../components/dish_card';
import Layout from "../components/navbar/layout";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Burger from '../img/shefburger.png';
import Boks from '../img/boksm_orig.png';
import Twister from '../img/twister_orig.png';

export default function sixth_task() {
  return (
    <div className="row">
      <Layout>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>  
            <Grid item xs={3}>
              <Card 
                icon= {<FoodBankIcon/>}
                title="Шефбургер"
                content="Нежный сливочный соус, сочное филе в оригинальной панировке, салат айcберг и помидоры на пшеничной булочке с черно-белым кунжутом"
                dishPic={Burger}
              />
            </Grid>
            <Grid item xs={3}>
              <Card 
                icon= {<FoodBankIcon/>}
                title="Боксмастер Оригинальный"
                content="Сочное куриное филе в оригинальной или острой хрустящей панировке, румяный хашбраун, ломтик сыра, кусочки помидора, салат и нежный соус в горячей лепешке – динамично и со вкусом!"
                dishPic={Boks}
              />
            </Grid>
            <Grid item xs={3}>
              <Card 
                icon= {<FoodBankIcon/>}
                title="Твистер Де Люкс оригинальный"
                content="Кусочки нежнейшего куриного филе в хрустящей оригинальной панировке с ароматным ломтиком бекона, тающим сыром и сочными овощами мы завернули в пшеничную лепешку и поджарили в тостере. "
                dishPic={Twister}
              />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </div>
  )
}
