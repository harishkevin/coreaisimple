import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function BasicAccordion(props) {
  return (
    <div>
      {props.props.module.map((mod, index) => {
        return (
          <Accordion>
        <AccordionSummary
          expandIcon={'>'}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontFamily: 'LufgaSB'}}>Module {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily: 'LufgaR'}}>
            {mod[index+1 + '.1']}
            <br />
            {mod[index+1 + '.2']}
            <br />
            {mod[index+1 + '.3']}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
      })}
    </div>
  );
}