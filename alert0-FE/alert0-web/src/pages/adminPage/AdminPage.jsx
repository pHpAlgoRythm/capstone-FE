// import AdminHeader from "../../components/headers/adminHeader"
// import AdminSideBar from "../../components/TabsNavigation/adminSiebar";
import { useState,useEffect } from "react";
import { io } from "socket.io-client";

const AdminDashboard = () => {
  const [users,setUsers] = useState([]);

  const socket = io('http://localhost:3000/broadcast')

  useEffect(() => {
    socket.on('newUsers',(newUsers)=> {
      setUsers((prevUsers) => [...prevUsers,newUsers])
    })
    return () => {
      socket.off('newUsers')
    }
  },[socket])
  return (

  //   <div className="">
      
  //     <header>
  //     <AdminHeader/>
  //   </header>

  //  <div className="flex justify-evenly items-center ">
  //  <div className="h-screen border  ">
  // <AdminSideBar/>
  //   </div>
    
  //   <div className="border w-full">
  //     content
  //   </div>
  //  </div>
  //    </div>
  <div>

<ul>
  {users.map((user,index) => (
    <li key={index}>
      {user.fullname} - {user.email} - {user.address} - {user.gender} - {user.role} - {user.status} - {user.approval_satus} - {user.approval_id_photo} - {user.approval_photo}
    </li>
  ))}
</ul>
  </div>
  
  )
    
}


export default AdminDashboard;