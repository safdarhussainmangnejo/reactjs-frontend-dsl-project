import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingChild} />
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.textAi}>TEXT AI</div>
      
      <div className={styles.companionAi1}> COMPANION AI</div>
      <div className={styles.imageAi}>IMAGE AI</div>
      <div className={styles.videosAi}>VIDEOS AI</div>
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
        <div className={styles.companionAi2}>Companion Ai</div>
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
      <div className={styles.banner1Wrapper}>
        <img className={styles.banner1Icon} alt="" src="/banner1@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/rectangle-99.svg" />
        <div className={styles.companionAi2}>
        COMPANION AI
        </div>
          
        
        <div className={styles.credit}>1 CREDIT</div>
        <img
          className={styles.companionAiImageIcon}
          alt=""
          src="/companionaiimage@2x.png"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <b className={styles.imageAi2}>IMAGE AI</b>
        <div className={styles.credits}>50 CREDITS</div>
        <img
          className={styles.companionAiImageIcon}
          alt=""
          src="/imageaiimage@2x.png"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild5} />
        <b className={styles.videosAi2}>VIDEOS AI</b>
        <button className={styles.credits1}>1000 CREDITS</button>
        <img
          className={styles.companionAiImageIcon}
          alt=""
          src="/videosaiimage@2x.png"
        />
      </div>
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
      <div className={styles.groupDiv}>
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <b className={styles.textAi2}>TEXT AI</b>
        <div className={styles.credits2}>10 CREDITS</div>
        <img
          className={styles.companionAiImageIcon}
          alt=""
          src="/textaiimage@2x.png"
        />
      </div>
      <Button className={styles.landingChild4} variant="outline-primary">
        Start Free Trial
      </Button>
      <div className={styles.banner2}>
        <img className={styles.banner1Icon} alt="" src="/image-23@2x.png" />
        <div className={styles.banner2Child} />
        <div className={styles.signUpNow}>
          Sign up now and get 2000 FREE CREDITS.
        </div>
      </div>
    </div>
  );
};

export default Landing;
