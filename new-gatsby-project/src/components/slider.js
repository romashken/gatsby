import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
    
    const [ value, setValue ] = React.useState(50) 

    const result = 100 * value

    const handleChange = (event, newValue) => {
        setValue(newValue) 
    
    }
    
    return (
      <Box width={300}>
        <p>{value}</p>
            <Slider
                size="small"
                value={value}
                max={100}
                onChange={handleChange}
            />
        <p>{result}</p> 
      </Box>
    );
  }