import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
    
    const [ budget, setBudget ] = React.useState(200) 

    const [ buyers, setBuyers ] = React.useState(200)

    const [ visiters, setVisiters ] = React.useState(20000)

    const [ income, setIncome ] = React.useState(1000)

    const conversion = Math.round(buyers / visiters *10000)/100 +(' %')

    const incomeAll = income * buyers

    const incomeClean = incomeAll - budget

    const budgetChange = (event, newBudget) => {
        setBudget(newBudget);
    }
    const buyersChange = (event, newBuyers) => {
        setBuyers(newBuyers)
    }
    const visitersChange = (event, newVisiters) => {
      setVisiters(newVisiters);
    }
    const incomeChange = (event, newIncome) => {
      setIncome(newIncome);
    }
    
    return (
      <Box width={300}>
        <p>{budget}</p>
            <Slider
                size="small"
                value={budget}
                min={100}
                max={300}
                onChange={budgetChange}
            />
        <p>{buyers}</p>    
             <Slider
                size="small"
                value={buyers}
                min={100}
                max={300}
                onChange={buyersChange}
            />
        <p>{visiters}</p> 
            <Slider
                size="small"
                value={visiters}
                min={10000}
                max={30000}
                onChange={visitersChange}
            />
        <p>{income}</p> 
            <Slider
                size="small"
                value={income}
                min={500}
                max={2000}
                onChange={incomeChange}
            />
        <p>Конверсия:{conversion}</p>
        <p>Прибыль:{incomeAll}</p>
        <p>Чистая прибыль:{incomeClean}</p>
      </Box>
    );
  }