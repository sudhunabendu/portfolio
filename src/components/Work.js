import React from "react";

const Work = () => {
  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>
        <div className="work__container bd-grid">
          <a href className="work__img">
            <img src="assets/img/work1.jpg" alt />
          </a>
          <a href className="work__img">
            <img src="assets/img/work2.jpg" alt />
          </a>
          <a href className="work__img">
            <img src="assets/img/work3.jpg" alt />
          </a>
          <a href className="work__img">
            <img src="assets/img/work4.jpg" alt />
          </a>
          <a href className="work__img">
            <img src="assets/img/work5.jpg" alt />
          </a>
          <a href className="work__img">
            <img src="assets/img/work6.jpg" alt />
          </a>
        </div>
      </section>
    </>
  );
};

export default Work;
