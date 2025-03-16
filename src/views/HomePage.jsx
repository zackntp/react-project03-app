import React from 'react'
import NavBar from '../components/NavBar'
import Footer from './../components/Footer';
import PicCard from '../components/PicCard';
import pic1 from './../assets/pic1.png'
import pic2 from './../assets/pic2.png'
import pic3 from './../assets/pic3.png'
function HomePage() {
  return (
    <>
     <NavBar/>
      <h1>Home</h1>
      <br />
      <PicCard showimg={pic1} wi={'100px'}/>
      <br />
      <PicCard showimg={pic2} wi={'50px'}/>
      <br />
      <PicCard showimg={pic3} wi={'200px'}/>
      < Footer/>
    </>
  )
}

export default HomePage
