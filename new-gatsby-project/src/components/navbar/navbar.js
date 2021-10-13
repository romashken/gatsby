import { Link } from 'gatsby';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import '../../pages/style.css'

export default function Navbar() {
    return (
        <nav>
            <Accordion className="links">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Навигационная панель</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <p>
                <Link to="/">Домашняя Страница</Link>
                </p>
                <p>
                <Link to="/App">Фон</Link>
                </p>
                <p>
                <Link to="/demo">Шаблон №1</Link>
                </p>
                <p>
                <Link to="/second_task">Шаблон №2</Link>
                </p>
                <p>
                <Link to="/third_task">Шаблон №3</Link>
                </p>
                <p>
                <Link to="/fourth_task">Шаблон №4</Link>
                </p>
                <p>
                <Link to="/fifth_task">Шаблон №5</Link>
                </p>
                <p>
                <Link to="/sixth_task">Шаблон №6</Link>
                </p>
                <p>
                <Link to="/map">MAP</Link>
                </p>
                <p>
                <Link to="/hook_counter">Счётчик</Link>
                </p>
                <p>
                <Link to="/accordion">Accordion</Link>
                </p>
                <p>
                <Link to="/cardFlip">Card Flip</Link>
                </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </nav>
    )
}
