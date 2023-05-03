import "bootstrap/dist/css/bootstrap.min.css";
import twitter from '../images/twitter-icon.png';
import medium from '../images/medium-icon.png';
import tiktok from '../images/tiktok-icon.png';
import linkedin from '../images/linked-in-icon.png';
import pinterest from '../images/pinterest-icon.png';
import telegram from '../images/telegram-icon.png';
const Footer = () => {
  return (
            <div className="row" style={{backgroundColor:'#3080AC', color:'white'}}>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" style={{padding:'50px'}}>
            
                <h1>AI</h1>
                <div style={{width:'120px', border:'3px solid white', borderRadius:'5px'}}></div>
                <br/>
                <h3>AI can help you automate tasks.</h3>

                <h5>
                    Artificial Intelligence (AI) is the simulation of human intelligence
                    processes by machines, especially computer systems.
                </h5>

            </div>


            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" style={{padding:'100px'}}>
                <img
                alt="image"
                src="/footerimage@2x.png"
                width='200px'
            />
            </div>

            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12" style={{padding:'20px'}}>
            <div className="row" style={{padding:'20px'}}>

            <div className="col">
                
                <h1>Quick Links</h1>
                <div style={{width:'180px', border:'3px solid white', borderRadius:'5px'}}></div>
                <br/>
                <h4>Text Ai</h4>
                <h4>Image Ai</h4>
                <h4>Videos Ai</h4>
                <h4>Companion Ai</h4>
            </div>


            <div className="col">
                <h1>Social Media</h1>
                <div style={{width:'180px', border:'3px solid white', borderRadius:'5px'}}></div>
                <br/>
                    
                    <h4><img src={twitter} alt='icon' width='25px'/> &nbsp; Twitter</h4>
                    <h4><img src={tiktok} alt='icon' width='25px'/> &nbsp; TikTok</h4>
                    <h4><img src={linkedin} alt='icon' width='25px'/> &nbsp; Linked In</h4>
                    <h4><img src={pinterest} alt='icon' width='25px'/> &nbsp; Pinterest</h4>
                    <h4><img src={medium} alt='icon' width='25px'/> &nbsp; Medium</h4>
                    <h4><img src={telegram} alt='icon' width='25px'/> &nbsp; Telegram</h4>
            </div>
            </div>

        </div>

        <hr/>
        <h6> &nbsp; © AI | All rights reserved.</h6>
        <br/>

        </div>
  );
};

export default Footer;
