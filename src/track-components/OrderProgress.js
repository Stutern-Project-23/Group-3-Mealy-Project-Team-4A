import * as React from 'react';
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { styled } from '@mui/system';
export default function OrderProgress() {


  const StyledStepper = styled(Stepper)({
    boxShadow: 2,
    backgroundColor: "rgb(245,245,245)",
    padding:2,

    '& .MuiStepIcon-active': {
      color: 'purple',
    },
    '& .MuiStepIcon-completed': {
      color: 'grey',
    },
    '& .Mui-disabled .MuiStepIcon-root': {
      color: 'warning.main',
    },

    '& .MuiStepConnector-root': {
      display: 'flex',
      flexDirection: 'column',
      
      padding: 0,
    },
    '& .MuiStepConnector-line': {
      width: '2px', // Adjust the width of the connector line
      backgroundColor: '#F5F5F5', // Adjust the color of the connector line
      marginLeft:'-5px',
    },
  });


  const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
    '& .MuiStepLabel-label': {
      fontSize: '10px',
      fontWeight: 'bold',
      paddingLeft:'35px'
    },
  }));




  return (
 <div className='track-order-progress-bar'>
    <StyledStepper activeStep={4} orientation="vertical" >
        <Step>
          <StyledStepLabel  >Order Confirmed</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel >Preparing Your Order</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel >Order is ready at the restaurant</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel >Rider is picking up your order</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel >Rider is nearby your place</StyledStepLabel>
        </Step>
      </StyledStepper>
    </div>  
  );
}