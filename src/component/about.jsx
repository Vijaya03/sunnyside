import React, { Component } from 'react';
import "../css/about.css"
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
function About() {
    return <div>
            <div className="head-section">
                 <p>Client testimonials</p>
            </div>
            <div className="team-members">
              <div className="card">
                    <div className="profile-pic"><img src={emily}/></div>
                    <div  className="comment">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
                    <div className="name">
                      <p className="name-head">Emily R. </p>
                      <p className="name-dec">Marketing Director</p>
                    </div>
              </div>
              <div className="card">
                    <div className="profile-pic"><img src={thomas}/></div>
                    <div  className="comment">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. </div>
                    <div className="name">
                      <p className="name-head">Thomas S.  </p>
                      <p className="name-dec">Chief Operating Officer</p>
                    </div>
              </div>
              <div className="card">
                    <div className="profile-pic"><img src={jennie}/></div>
                    <div  className="comment">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
                    <div className="name">
                      <p className="name-head">Jennie F.</p>
                      <p className="name-dec">Business Owner</p>
                    </div>
              </div>
            </div>
          </div>;
  }
export default About;