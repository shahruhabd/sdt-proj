import React from "react";
import "./initatives.css";
import img1 from "./img/i-1.png";
import img2 from "./img/i-2.png";
import line from "./img/line.png";
import img3 from "./img/i-3.png";
import n1 from "./img/n1.png";
import n2 from "./img/n2.png";
import n3 from "./img/n3.png";
import c1 from "./img/c1.png";
import c2 from "./img/c2.png";
import c3 from "./img/c3.png";

const Initatives = () => {
  return (
    <div className="initatives-container">
      <div className="initatives-wrapper">
        <div className="initatives-title" id="uIni">Our Initatives</div>
        <div className="initatives-block">
          <img className="initatives-block_img" src={img1} alt="" width={440} />
          <img src={n1} alt="" className="initatives-block_num" />
          <div className="initatives-block_descr">
            Establish communication between students and build skills in the
            implementation of ideas and project management. Gather teams of
            young people who are ready to help and solve problems.
          </div>
          <img src={c1} alt="" className="initatives-block_decor1" />
        </div>
        <div className="initatives-block reverse">
          <img className="initatives-block_img" src={img2} alt="" width={440} />
          <img src={n2} alt="" className="initatives-block_num" />
          <div className="initatives-block_descr">
            Provide a forum for interaction between students and startup
            founders. Exchange of skills, buildings, ideas with people who
            already have experience and completed projects.
          </div>
          <img src={c2} alt="" className="initatives-block_decor2" />
        </div>
        <div className="initatives-block">
          <img className="initatives-block_img" src={img3} alt="" width={440} />
          <img src={n3} alt="" className="initatives-block_num" />
          <div className="initatives-block_descr">
            To give SDT students a chance to use their skills and abilities in
            addition to studying for self-development and creating their own
            projects.
          </div>
          <img src={c3} alt="" className="initatives-block_decor3" />
        </div>
        <img src={line} alt="" className="initatives-block_line" />
      </div>
    </div>
  );
};

export default Initatives;
