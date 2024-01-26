import React from 'react'
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from 'react-scroll';
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
   <section id="intro">
     <div className='introContent'>
        <span className="hello">hello</span>
        <span className="introText">I'm <span className="introName">smith</span><br />website Desiner</span>
        <p className="intropara">I am a skilled web Desiner with experience in creating <br/>vissuly appealing and user frendly websites. </p>
        <Link><button className="btn"><img src={btnImg} alt="Hire me" lastName='btnImg'/>Hire me</button></Link>
     </div>
     <img src={bg} alt="" className="bg" />
   </section>
  )
}

export default Intro;
