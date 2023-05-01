import imageai from '../images/videos-ai-image.png'
import styles from "./Landing.module.css";
const CreditImage = ()=>{

    
        
  return (
    <div className={styles.landing}>
      
      <div className="container" style={{backgroundColor: '#3D6783', height: 850,  maxWidth: 'none',}}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/rectangle-99.svg" />
        <div className={styles.companionAi2}> COMPANION AI</div>
          
        
        <div className={styles.credits}>1 CREDIT</div>
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
      </div>
    </div>
  );
};
export default CreditImage;