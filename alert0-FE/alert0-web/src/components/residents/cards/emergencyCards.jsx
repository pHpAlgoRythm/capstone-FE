import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SubmitModal from '../submitModal';


export default function MediaCard() {
  const [modal,setModal] = React.useState(false)
  const [showWebcam, setShowWebcam ] = React.useState(false)
  const webcamRef = React.useRef(null)
  const [imgSrc,setImgSrc] = React.useState(null)

  return (
    <div className='flex  flex-col md:flex-row border border-white gap-8 w-full h-full  ' >
    <Card sx={{ maxWidth: 400}} className='md:w-full md:h-fit'>
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
        <button className=' text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold' onClick={(() =>setModal(true))}>Request</button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 400,border: '1px solid black' }} className='md:w-full md:h-fit' >
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
<button className='text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold' onClick={(() =>setModal(true))}>Request</button>
</CardActions>
</Card>

{modal && <SubmitModal setModal={setModal} setShowWebcam={setShowWebcam} showWebcam= {showWebcam} webcamRef={webcamRef} imgSrc={imgSrc} setImgSrc={setImgSrc}/>}
          
</div>
  );

}
