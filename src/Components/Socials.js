

const Socials = ()=>{

    return(
        <>
        <div className={styles.socialMedia}>Social Media</div>
        <img className={styles.lineIcon} alt="" src="/line-6.svg" />
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
      </>
    )
}
export default Socials;