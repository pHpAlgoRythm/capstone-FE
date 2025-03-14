import Header from "../../components/headers/header";
import Card from "../../components/card/card";
const Dashboard = () => {

  return (
    <>
    <header  className="flex justify-between bg-sky-950 items-center w-screen h-14 p-1 fixed top-0 left-0 uppercase text-white z-50">
    <Header/>
       </header>
        <main className="pt-14 md:pt-50 lg:pt-0 border">
        <div className= 'grid grid-cols-1 md:grid-cols-2' >
        <Card
        image='/images/test.jpg'
        title='Ambulance'
        buttonText='Request' />
        <Card
        image='/images/test.jpg'
        title='Firetruck'
        buttonText='Request' />
    </div>
        </main>
       
      </>
      
  )
};

export default Dashboard;