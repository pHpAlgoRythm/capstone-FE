import React from "react";
import H1 from "../Headings/h1";
import Card from "../card/card";
const Header = ({role}) => {

        return(
           <div >
                        <header className="flex justify-between bg-sky-950 items-center w-screen p-2 fixed top-0 left-0 uppercase text-white">
                        <img src="/images/alert0.png" alt="This is a logo of Alert0" className="header-logo" />
                        <H1 title='Alert0'/>
                      <div className="flex gap-2">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M12 22h0" />
  <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>
                      </div>

                        </header>      
           </div>
        )

}

export default Header;