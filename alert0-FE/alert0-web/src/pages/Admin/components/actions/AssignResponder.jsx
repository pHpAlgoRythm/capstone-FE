import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box
} from '@mui/material';

import AssignDriver from '../Tables/AssignDriver';
import AssignResponders from '../Tables/AssignReponder';

const AssignResponder = ({ request_id }) => {
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedDriverId, setSelectedDriverId] = useState(null); 
    const [selectedRespondersId, setSelectedRespondersId] = useState(null);
  
    const steps = ['Assign Driver', 'Assign Responders'];
  
    const handleNext = () => {
      if (activeStep < steps.length - 1) {
        setActiveStep(prev => prev + 1);
      } else {
        alert(`Request ID: ${request_id}\nDriver ID: ${selectedDriverId}\n Responders ID: ${selectedRespondersId}`);
       
        setOpen(false);
        setActiveStep(0);
      }
    };
  
    const handleBack = () => {
      setActiveStep(prev => prev - 1);
    };
  
    const handleClose = () => {
      setOpen(false);
      setActiveStep(0);
    };
  
    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)} className="w-full">
          Respond
        </Button>
  
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Assign</DialogTitle>
  
          <DialogContent>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
  
            <Box sx={{ mt: 2 }}>
              {activeStep === 0 && (
                <AssignDriver onAssignDriver={setSelectedDriverId} />
              )}
              {activeStep === 1 && (
                <AssignResponders onAssignResponder={setSelectedRespondersId} />
            )}
            </Box>
  
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  

export default AssignResponder;
