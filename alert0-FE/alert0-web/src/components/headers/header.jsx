import React from "react";
import H1 from "../Headings/h1";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  UserIcon ,
  PaperClipIcon ,
  ArrowPathIcon ,
  
} from '@heroicons/react/24/outline'
const Header = ({role}) => {

  const solutions = [
    { name: 'Accounts', description: 'Edit account settings', href: '#', icon: UserIcon },
    { name: 'Requests', description: 'See Request status', href: '#', icon: PaperClipIcon  },
    { name: 'Updates', description: "See notification", href: '#', icon: ArrowPathIcon  },
   
  ]
  
  
        return(
           <div className="flex justify-between items-center w-full  lg:justify-evenly lg:gap-40" > 
           <img src="/images/alert0.png" alt="This is a logo of Alert0" className="header-logo" />
                        <H1 title='Alert0'/>

                      <div className="flex gap-2  lg:hidden ">
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

<Popover className="relative hidden lg:block">
      <PopoverButton className="inline-flex items-center gap-x-1 text-md/6 font-semibold text-white">
        <span>Options</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4  transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-lg flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">

          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-gray-900" />
                  
                </div>
                <div>
                  <a href={item.href} className="font-semibold ">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </PopoverPanel>
    </Popover>
</div>
          
       
        )

}

export default Header;