import React from "react";
import img1 from "./assets/a.png";
import img2 from "./assets/b.png";

const App = () => {
  return (
    <section className="app">
      <iframe src="https://my.spline.design/weatherdesign-b2861278a987c02ece485200ee341dd5/" />

      <div className="top">
        <h5>
          Wheather<span>Forcast</span>
        </h5>
        <div className="link">
          <span>
            <i className="bx bx-user"></i>
          </span>
          <span>
            <i className="bx bx-menu"></i>
          </span>
        </div>
      </div>
      <div className="con">
        <h1>
          Good<br></br>Morning
        </h1>
        <p>
          Welcome to wheather forcast app<br></br>Develop by CoolDevloper
        </p>
      </div>
      <div className="temp">
        <h1>
          28
          <span>
            <i class="bx bx-radio-circle"></i>
          </span>
        </h1>
        <p>
          Today's Temperature<br></br>
          Yesterday Temperature
        </p>
      </div>
      <div className="stemp">
        <div className="p">
          <p>
            Mon
            <span>
              {" "}
              25 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Tue
            <span>
              {" "}
              28 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Wed
            <span>
              {" "}
              20 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Thu
            <span>
              {" "}
              30 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Fri
            <span>
              {" "}
              23 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Sat
            <span>
              {" "}
              35 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="p">
          <p>
            Sun
            <span>
              {" "}
              25 <i className="bx bx-radio-circle"></i>
            </span>
          </p>
          <img src={img1} alt="img" />
        </div>
      </div>

      <div className="btn">
        <div className="c">
          <i className="bx bx-share-alt"></i>
        </div>
        <div className="pc">
          <p>Hello,</p>
          <h6>Gaurav Bajpai</h6>
        </div>
      </div>
    </section>
  );
};

export default App;
