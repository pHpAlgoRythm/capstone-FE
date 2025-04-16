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

  const [reqType,setReqType] = React.useState('');

    const handleRequest = (value) => {
      setModal(true)
      setReqType(value)
     
    }

  return (
    <div className='flex flex-col lg:flex-row shadow-xl gap-8 w-full h-full border border-white ' >
    <Card sx={{ maxWidth: 400}} className='md:w-full md:h-fit '>
      <CardMedia
        sx={{ height: 250,
         }}
        
        image="/images/ambulance1.jpg "
        title="Ambulance"
      />
      <CardContent>
       <h1 className='text-lg text-center uppercase'>Ambulance</h1>
      </CardContent>

      <CardActions>
        <button className=' text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold' onClick={() =>handleRequest("Ambulance")} >Request</button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 400 }} className='md:w-full md:h-fit' >
<CardMedia
  sx={{ height: 250,
     
   }}
  image="/images/firetruck.jpg "
  title="Fire Truck"
/>
<CardContent>
 <h1 className='text-lg text-center  uppercase'>FireTruck</h1>
</CardContent>
<CardActions>
<button className='text-white border-white w-full bg-red-600 p-2 rounded-sm hover:bg-red-400 cursor-pointer font-semibold' onClick={() => handleRequest('FireTruck')} >Request</button>
</CardActions>
</Card>

{modal && <SubmitModal setModal={setModal} setShowWebcam={setShowWebcam} showWebcam= {showWebcam} webcamRef={webcamRef} imgSrc={imgSrc} setImgSrc={setImgSrc} type={reqType} />}
          
</div>
  );

};

