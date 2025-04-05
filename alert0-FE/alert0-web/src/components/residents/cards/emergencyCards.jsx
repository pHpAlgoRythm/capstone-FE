import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard() {
  return (

<div className='flex justify-center items-center gap-8 w-full h-full  ' >
    <Card sx={{ maxWidth: 400}} className='w-[50%]  '>
      <CardMedia
        sx={{ height: 150,
            
         }}
        image="/images/ambulance.jpg "
        title="Ambulance"
        
      />
      <CardContent>
       <h1 className='text-lg text-center uppercase'>Ambulance</h1>
      </CardContent>
      <CardActions>
        <button className=' text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold'>Request</button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 400,border: '1px solid black' }} className='w-[50%]'>
<CardMedia
  sx={{ height: 150,
     
   }}
  image="/images/firetruck.jpg "
  title="Fire Truck"
  
/>
<CardContent>
 <h1 className='text-lg text-center  uppercase'>FireTruck</h1>
</CardContent>
<CardActions>
  <button className='text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold'>Request</button>
</CardActions>
</Card>

</div>
  );
}
