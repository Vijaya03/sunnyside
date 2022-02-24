import React, { Component } from 'react';
import "../css/service.css";
function Service() {
    return <>
            <div className="service-container">
                <div className="content">
                  <p className="content-head">Transform your brand</p>
                  <p className="content-des">
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                  </p>
                  <p className="content-link">
                  LEARN MORE
                  </p>
                </div>   
                <div className="egg"></div> 
                <div className="egg glass"></div>  
                <div className="content stand">
                  <p className="content-head">Stand out to the right audience</p>
                  <p className="content-des">
                  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                  </p>
                  <p className="content-link">
                  LEARN MORE
                  </p>
                </div> 
                <div className="cherry">
                  <div className="design"> 
                    <p className="design-header"> Graphic design</p>
                    <p className="design-dec">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                  </div>
                </div>
                <div className="orange">
                   <div className="design"> 
                      <p className="design-header">Photography</p>
                      <p className="design-dec">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                  </div>
           </div>
           </>;
  }
export default Service;