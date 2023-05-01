import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Landing.module.css";
const FooterCopy = () => {
  return (
    <div className={styles.landing}>
        
       <div className="container" style={{backgroundColor: '#3080AC', height: 850, border: '5px solid red', maxWidth: 'none',}}>
     
      
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.landingItem} />
      <div className={styles.landingInner} />

      <div className={styles.socialMedia}>Social Media</div>
      <img className={styles.lineIcon} alt="" src="/line-6.svg" />

      <div className={styles.quickLinks}>Quick Links</div>
      <div className={styles.textAiParent}>
        <div className={styles.textAi1}>Text Ai</div>
        <div className={styles.imageAi1}>Image Ai</div>
        <div className={styles.videosAi1}>Videos Ai</div>
        <div className={styles.companionAi1}>Companion Ai</div>
      </div>
      <img className={styles.landingChild1} alt="" src="/line-4.svg" />
      <img className={styles.landingChild2} alt="" src="/line-8.svg" />
      <img className={styles.landingChild3} alt="" src="/line-8.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.aiAll}>© AI | All rights reserved.</div>


      <img
        className={styles.footerImageIcon}
        alt=""
        src="/footerimage@2x.png"
      />

      
      <div className={styles.textAiParent}>AI</div>
      <Button className={styles.groupButton} variant="outline-primary">
        AI
      </Button>
      <div className={styles.aiCanHelpYouAutomateTasksParent}>
        <b className={styles.aiCanHelp}>AI can help you automate tasks.</b>
        <div className={styles.artificialIntelligenceAi}>
          Artificial Intelligence (AI) is the simulation of human intelligence
          processes by machines, especially computer systems.
        </div>
      </div>

      
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/rectangle-99.svg" />
      
      
      <div className={styles.groupParent}>
        <button className={styles.vectorParent} autoFocus>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.twitter}>Twitter</div>
        </button>
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          <div className={styles.linkedIn}>Linked In</div>
        </div>
        <button className={styles.tiktokParent} autoFocus>
          <div className={styles.tiktok}>Tiktok</div>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </button>
        <button className={styles.pinterestParent} autoFocus>
          <div className={styles.pinterest}>Pinterest</div>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </button>
        <button className={styles.mediumParent} autoFocus>
          <div className={styles.twitter}>Medium</div>
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        </button>
        <button className={styles.telegramParent} autoFocus>
          <div className={styles.pinterest}>Telegram</div>
          <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        </button>
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default FooterCopy;
