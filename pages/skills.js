import React from "react";
import Image from "next/image";
import react from "../images/react.png";
import html from "../images/html.png";
import css from "../images/css.svg";
import js from "../images/js.png";
import java from "../images/java.png";
import next from "../images/next.png"
export default function skills() {
  
  return (
    <div className="skills">
      <div className="title">
        <h1>My skills</h1>
      </div>
      <div className="skillsection1">
        <div className="sec1">
          <Image className="img1" width={200} height={200} src={html} />
          <h3>HTML</h3>
          <div className="w3-light-grey">
  <div className="w3-grey1">90%</div>
</div>
        </div>
        <div className="sec1">
          <Image className="img1" width={300} height={200} src={css} />
          <h3>CSS</h3>
          <div className="w3-light-grey">
  <div className="w3-grey">90%</div>
</div>
        </div>
        <div className="sec1">
          <Image className="img1" width={200} height={200} src={java} />
          <h3>Java</h3>
      
        <div className="w3-light-grey2">
  <div className="w3-grey ">95%</div>
</div>
</div>
        </div>
        <div className="skillsection1">
          <div className="sec1">
            <Image className="img1" width={300} height={200} src={js} />
            <h3>JavaScript</h3>
            <div className="w3-light-grey3">
  <div className="w3-grey">70%</div>
</div>
          </div>
          <div className="sec1">
            <Image className="img1" width={300} height={200} src={react} />
            <h3>React.JS</h3>
            <div className="w3-light-grey4">
  <div className="w3-grey">80%</div>
</div>
          </div>
          <div className="sec1">
            <Image className="img1" width={300} height={200} src={next} />
            <h3>Next.JS</h3>
            <div className="w3-light-grey5">
  <div className="w3-grey">82%</div>
</div>

          </div>
        </div>
     
    </div>
  );
}
