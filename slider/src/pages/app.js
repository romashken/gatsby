import React from 'react';
// Импорт таблицы стилей CSS 
import './app.css';
// Импорт функционала слайдера из MatUI
import {Slider} from '@material-ui/core';
// Импорт стилей
import { makeStyles } from '@material-ui/styles';
function App()  {
    // Отображение нулевого и максимального значения слайдера
    const mark=[
        {
            value:0,
            label:"0"
        },
        {
            value:100,
            label:"100"
        }
    ]
    // Отображение ползунка слайдера
    const getValue=(e,val)=>{
        console.warn(val)
    }
    return(
            <div className="App">
                <h1 style={{width:300,margin:30}}>Slider</h1>
            <div style={{width: 300,margin:30}}>
            <Slider
            color="primary"
            defaultValue={50}
            max={100}
            step={1}
            marks={mark}
            valueLabelDisplay='auto'
            onChange={getValue}
            />
            </div>
            </div>
    )
}
    export default App;