
import React from "react";


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function ChatBot() {
  const iframeStyle = {
    border: '35px solid rgba(0, 0, 0, 0)',
    transition: '.3s',
    borderRadius: '40px'
  };



  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <div className="iframe-container">
            <iframe
                id="PQEPAHZCMN"
                loading="eager"
                src="https://embed.pickaxeproject.com/axe?id=NeuroChat_XBND2&mode=embed_gold&host=beta&theme=custom&opacity=60&font_header=Poppins&size_header=30&font_body=Poppins&size_body=16&font_labels=Poppins&size_labels=14&font_button=Poppins&size_button=16&c_fb=3B4076&c_ff=3B4076&c_fbd=3F4FCA&c_rb=D84FD3&c_bb=FF8D72&c_bt=000000&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=0.5&s_to=1&s_r=2"
                title="NeuroChat embedded assistant"
                width="100%"
                height="500px"
                borderRadius= "40px"
                onMouseOver={(event) => {
                  event.currentTarget.style.boxShadow = '0px 6px 20px 0px rgba(0,0,0,0.15)';
                  event.currentTarget.style.transform = 'translateY(-2px)';
                  event.currentTarget.style.transition = 'transform 300ms ease';
                }}
                onMouseOut={(event) => {
                  event.currentTarget.style.boxShadow = 'none';
                  event.currentTarget.style.transform = 'translateY(0px)';
                }}
                style={iframeStyle}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}