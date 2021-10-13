import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Death from '../img/death_logo.jpg';
import Queen from '../img/queen_av.jpg';
import Behemoth from '../img/behemoth_av.jpg';
import Layout from "../components/navbar/layout";


export default function Chips() {
    return (
        <Layout> 
            <Stack 
                direction="column"
                justifyContent="left"
                alignItems="flex-start"
                spacing={3}
            >
                <Tooltip title="Crystal Mountain, A Moment of Clarity, Leprosy" placement="right">
                    <Chip 
                        color="info" 
                        avatar={<Avatar src= {Death} alt="Death"/>} 
                        label="Death"
                    />
                </Tooltip>
                <Tooltip title="Killer Queen, Dragon Attack, Misfire" placement="right">  
                    <Chip 
                        color="info" 
                        avatar={<Avatar src= {Queen} alt="Queen"/>} 
                        label="Queen"
                    />
                </Tooltip>
                <Tooltip title="Starspawn, Demigod, Prometherion" placement="right">
                    <Chip 
                        color="info" 
                        avatar={<Avatar src= {Behemoth} alt="Behemoth"/>} 
                        label="Behemoth"
                    />
                </Tooltip>
            </Stack>
        </Layout>   
    )
}
