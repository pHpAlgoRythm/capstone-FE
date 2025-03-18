import {useNavigate } from "react-router-dom";
const Card = ({ image, title, buttonText,redirectPath }) => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    if(handleRedirect) {
      navigate(redirectPath)
    }
  }
    return (

      <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4  m-2">
        <img className="w-full rounded-2xl border" src={image} alt={title} />
        <div className="py-4 text-center">
          <h2 className="text-xl font-semibold text-black uppercase">{title}</h2>
          
          <button className= " cursor-pointer mt-4 px-4 py-2 bg-red-600 text-white rounded-lg w-full hover:bg-red-700  transition font-semibold " onClick={handleRedirect} >
            {buttonText}
          </button>

        </div>
      </div>
    );
  };
  
  export default Card;
  