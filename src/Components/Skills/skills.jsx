import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">what i do </span>
      <span className="skillDesc">I am a skilled and possion webdesigner and make vary vell understand website and understandable portfolio platform</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>this is a demo text,you can write your own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>this is demo text can ybe change while asking the product ready website</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AppDesign</h2>
            <p>you can write text related to mobile app development </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
