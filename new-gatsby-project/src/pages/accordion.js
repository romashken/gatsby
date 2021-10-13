import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Homer from '../img/homer_meme.jpg';
import Bread from '../img/bread.jpg';

import { Container } from 'react-bootstrap';
import BasicModal from '../components/modal';
import Counter from '../components/counter';
import Poem from '../components/poem';
import Layout from "../components/navbar/layout";

export default function NewAccordion() {
    return (
      <div>
        <Layout>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Вкладка 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <img src={Homer} alt="homer" className="img-fluid" />
                    </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Вкладка 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Poem />
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Вкладка 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Container>       
                    <div className = "embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/9Gc4QTqslN4" title="The Trashmen - Surfin Bird" allowFullScreen></iframe>
                    </div>        
                </Container>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography>Вкладка 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BasicModal
                        name={
                            <h1>Le Meme</h1>
                        }
                        content ={
                            <img className="meme_pic" src={Bread} alt="meme" />
                        } />
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography>Вкладка 5</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Counter />
                </AccordionDetails>
                </Accordion>
            </Layout>
      </div>
    );
  }
  