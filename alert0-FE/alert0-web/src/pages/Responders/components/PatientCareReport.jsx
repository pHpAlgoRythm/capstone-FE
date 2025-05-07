import React, { use, useState } from 'react';
import { Button, 
        Dialog, 
        DialogTitle, 
        DialogContent, 
        DialogActions, 
        FormControl, 
        FormControlLabel, 
        FormLabel, 
        Checkbox, 
        TextField, 
        Box, 
        Stack,
        MenuItem,
        Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Paper

      } from '@mui/material';

const PatientCareReport = ({ details }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log('details', details);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
    const [selected, setSelected] = useState(null);
  
    const handleChange = (value) => {
      setSelected(prev => (prev === value ? null : value));
    };


    const [civilStatus, setCivilStatus] = useState('')
    const [gender, setGender] = useState('')


  return (
    <div>
      <Button onClick={handleClick} variant="outlined">
        Submit Patient Care Report
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Patient Care Report
         
        </DialogTitle>

        <DialogContent dividers>

    <FormControl component="fieldset">
      <div>
        <TextField label=' Report No.'/>
      </div>
      <div>
        <FormLabel component="legend">Triage</FormLabel>
   
        <FormControlLabel value="red" control={<Checkbox sx={{ color: 'red', '&.Mui-checked': { color: 'red' } }} checked={selected === 'red'} onChange={() => handleChange('red')} /> }  label="Red / Immediate" />
        <FormControlLabel value="yellow" control={<Checkbox sx={{ color: 'yellow', '&.Mui-checked': { color: 'yellow' } }}  checked={selected === 'yellow'} onChange={() => handleChange('yellow')} />} label="Yellow / Delayed" />
        <FormControlLabel value="green" control={<Checkbox sx={{ color: 'green', '&.Mui-checked': { color: 'green' } }} checked={selected === 'green'} onChange={() => handleChange('green')} />} label="Green / Minor" />
        <FormControlLabel value="black" control={<Checkbox sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} checked={selected === 'black'} onChange={() => handleChange('black')} />} label="Black / Deceased" />
      </div>
    <hr />
    <div>
      <FormControlLabel value='true' control={ <Checkbox/> } label='Trauma'/>
      <FormControlLabel value ='true' control={< Checkbox />} label='Medical'/>
    </div>
    <hr />
    <div>
       <FormLabel>Patient Information</FormLabel>
            <Box component="form" noValidate autoComplete="off" sx={{ width: '100%' }}>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <TextField fullWidth variant="outlined" label="Last Name" />
              <TextField fullWidth variant="outlined" label="First Name" />
              <TextField fullWidth variant="outlined" label="Middle Initial" />
           </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>

              <TextField
                fullWidth
                variant="outlined"
                label="Birth Date"
                type="date"
                focused
              />

              <TextField
                fullWidth
                variant="outlined"
                label="Sex"
                select
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem  value=""></MenuItem >
                <MenuItem  value="Male">Male</MenuItem >
                <MenuItem  value="Female">Female</MenuItem >
              </TextField>

              <TextField
               fullWidth
                variant="outlined"
                label="Civil Status"
                select
                onChange={(e) => setCivilStatus(e.target.value)}
              >
                <MenuItem  value=""></MenuItem >
                <MenuItem  value="Single">Single</MenuItem >
                <MenuItem  value="Married">Married</MenuItem >
                <MenuItem  value="Widowed">Widowed</MenuItem >
                <MenuItem  value="Separated">Separated</MenuItem >
              </TextField>
            </Stack>
          </Box>

              <hr />
              <br />
              <TextField variant='outlined' fullWidth label='Address' />
              <br />
              <br />
              <hr />

    </div>

    <div>
      <FormLabel>Care on Progress upon Arrival</FormLabel><br />

      <FormControlLabel value='Bystander' control={<Checkbox onChange={() => {handleChange('Bystander')}} />} label='Bystander' />
      <FormControlLabel value='Family' control={<Checkbox onChange={() => {handleChange('Family')}}  />} label='Family' />
      <FormControlLabel value='Brgy Personnel' control={<Checkbox onChange={() => {handleChange('Brgy Personnel')}} />} label='Brgy Personnel' />
      <FormControlLabel value='PNP/CTRSMO' control={ <Checkbox/>} label='PNP/CTTRAMO' />
      <FormControlLabel value='Medical Personnel' control={<Checkbox/>} label='Medical Personnel' />
      <FormControlLabel value='EMS' control={<Checkbox />} label='EMS' />
      <FormControlLabel value='Others' control={<Checkbox/>} label='Others'/>
    </div>
    <hr />
    <div>
      <FormLabel>Level of Consciousness</FormLabel>
      <br />
      <FormControlLabel value='Alert' control={<Checkbox />} label='Alert' />
      <FormControlLabel value='Pain' control={<Checkbox />} label='Pain' />
      <FormControlLabel value='Verbal' control={<Checkbox />} label='Verbal' />
      <FormControlLabel value='Unresponsive' control={<Checkbox />} label='Unresponsive' />

    </div>
      
    <hr />

    <div>
      <FormLabel>Chief Complaint</FormLabel>
      <TextField variant='outlined' fullWidth label='Chief Complaint'/>
      
    </div>

    <br />
    <hr />

    <div>
      <FormLabel>SAMPLE</FormLabel><br />

      <TextField variant='outlined'  label='Signs & Symtoms' />
      <TextField variant='outlined'  label='Allergies'/>
      <TextField variant='outlined'  label='Medication'/>
      <TextField variant='outlined'  label='Past Med. History'/>
      <TextField variant='outlined'  label='Last Oral Intake'/>
      <TextField variant='outlined'  label='Event Prior to Illness'/>
    </div>

    <br />
    <hr />

    <div>
      <FormLabel>Glassgow Coma Scale</FormLabel>

      <TextField  
        fullWidth
        variant="outlined"
        label="EYE"
        select
        >
          <MenuItem ></MenuItem>
          <MenuItem>Open Sponteneously</MenuItem>
          <MenuItem>Open to Voice</MenuItem>
          <MenuItem>Open to Pain</MenuItem>
          <MenuItem>No Response</MenuItem>
        </TextField>

        <TextField  
        fullWidth
        variant="outlined"
        label="Verbal"
        select
        >
          <MenuItem ></MenuItem>
          <MenuItem>Oriented/ Converse normaly</MenuItem>
          <MenuItem>Confused/ Disoreinted</MenuItem>
          <MenuItem>Incoherent words</MenuItem>
          <MenuItem>Incomprehensible</MenuItem>
          <MenuItem>No Verbal response</MenuItem>
        </TextField>

        <TextField  
        fullWidth
        variant="outlined"
        label="Motor"
        select
        >
          <MenuItem ></MenuItem>
          <MenuItem>Obey Commands</MenuItem>
          <MenuItem>Localized Pain</MenuItem>
          <MenuItem>Withdraws from Pain</MenuItem>
          <MenuItem>Flexion/ Decorticate</MenuItem>
          <MenuItem>Extension/ Decerebrate</MenuItem>
          <MenuItem>No Motor Response</MenuItem>
        </TextField>


    </div>
    <br />
    <hr />
    <div>
        <FormLabel>Vital Signs</FormLabel>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Blood Pressure</TableCell>
                  <TableCell>Pulse Rate</TableCell>
                  <TableCell>Respiratory Rate</TableCell>
                  <TableCell>Temperature</TableCell>
                  <TableCell>Sp02</TableCell>
                  <TableCell>GCS</TableCell>
                  <TableCell>Capillary Refill</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                           {/* time */}
                    <TableCell >
                        <TextField fullWidth label='' /> 
                    </TableCell>
                          
                          {/* BP */}
                    <TableCell>
                        <TextField fullWidth label='mm/HG' /> 
                    </TableCell>

                            {/* PR */}
                    <TableCell>
                        <TextField fullWidth label='bpm' /> 
                    </TableCell>

                     {/* RR */}
                     <TableCell>
                        <TextField fullWidth label='cbpm' /> 
                    </TableCell>

                     {/* temp */}
                     <TableCell >
                        <TextField fullWidth label='℃' /> 
                    </TableCell>

                  {/* sp02 */}
                  <TableCell>
                        <TextField fullWidth label='%' /> 
                    </TableCell>

                    {/* GCS */}
                    <TableCell>
                        <TextField fullWidth label='' /> 
                    </TableCell>

                    {/* CR */}
                    <TableCell>
                        <TextField fullWidth label='seconds' /> 
                    </TableCell>

                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        
    </div>

    <br />
    <hr />

    <div>
      <FormLabel>Pulse</FormLabel>
      <br />

      <FormControlLabel control={<Checkbox />} label='Normal' />
      <FormControlLabel control={<Checkbox/>} label='Bounding'/>
      <FormControlLabel control={<Checkbox/>} label='Thready'/>
      <FormControlLabel control={<Checkbox/>} label='Regular'/>
      <FormControlLabel control={<Checkbox/>} label='Irregular'/>
      </div>

      <br />
      <hr />

    <div>

     <center><h1>SKIN</h1></center>

    <div>
      <FormLabel>Color</FormLabel>
      <br />

      <FormControlLabel control={<Checkbox/>} label='Normal'/>
      <FormControlLabel control={<Checkbox/>} label='Cynotie'/>
      <FormControlLabel control={<Checkbox/>} label='Pale'/>
      <FormControlLabel control={<Checkbox/>} label='Flushed'/>
      <FormControlLabel control={<Checkbox/>} label='Jaundice'/>
      <FormControlLabel control={<Checkbox/>} label='Mottled'/>
      <FormControlLabel control={<Checkbox/>} label='Rashed'/>

    </div>

    <br />
    <hr />

    <div>
      <FormLabel>Temperature</FormLabel>

      <br />

      <FormControlLabel control={<Checkbox/>} label='Normal'/>
      <FormControlLabel control={<Checkbox/>} label='Warm'/>
      <FormControlLabel control={<Checkbox/>} label='Cold'/>

    </div>

    <br />
    <hr />

    <div>
      <FormLabel>Moisture</FormLabel>
      <br />

      <FormControlLabel control={<Checkbox/>} label='Normal' />
      <FormControlLabel control={<Checkbox/>} label='Moist' />
      <FormControlLabel control={<Checkbox/>} label='Diaphoretic' />
      <FormControlLabel control={<Checkbox/>} label='Dry' />

    </div>

    </div>

    <br />



    </FormControl>


        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PatientCareReport;
