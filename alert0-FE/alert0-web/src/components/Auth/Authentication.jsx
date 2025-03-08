
import { useState } from "react";

  return (
    <>
      <div className="card">
       
              <>
                {" "}
               



                
              </>
          

            {isLogin && (
              <>
            
            )}

            <div className="col-span-2 w-full">
              <Submit
                name={isSubmitting ? 
                  isLogin? 'Loging in...':
                  'Registering...'
                   :isLogin ?
                   'Login' :
                   'Register'
                }
                disabled={isSubmitting}
                type="Submit"
              ></Submit>
            </div>
            {isLogin ? (
              <a
                href="#"
                onClick={toggle}
                className="cursor-pointer hover:underline col-span-2 "
              >
                Dont have an account?
              </a>
            ) : (
              <a
                href="#"
                onClick={toggle}
                className="cursor-pointer hover:underline col-span-2"
              >
                Already have an account?
              </a>
            )}
        
    </>
  );
};

export default Authentication;
