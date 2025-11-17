import React from 'react'
import styles from "./footer.module.css"
import "../../index.css"
import logo from "../../assets/LogoFooter.png"
import facebook from "../../assets/Facebook.png"
import instagram from "../../assets/Instagram.png"
import twitter from "../../assets/Twitter.png"

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.mainFooterBox}>
        <div className={styles.footer}>
          <div className={styles.top}>
            <div className={styles.rows}>
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>

            <ul className={styles.rows}>
              <li className={styles.elements}>
                <a href="#">Web Programming</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Mobile Programming</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Java Beginner</a>
              </li>
              <li className={styles.elements}>
                <a href="#">PHP Beginner</a>
              </li>
            </ul>

            <ul className={styles.rows}>
              <li className={styles.elements}>
                <a href="#">Adobe Illustrator</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Adobe Photoshop</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Design Logo</a>
              </li>
            </ul>

            <ul className={styles.rows}>
              <li className={styles.elements}>
                <a href="#">Writing Course</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Photography</a>
              </li>
              <li className={styles.elements}>
                <a href="#">Video Making</a>
              </li>
            </ul>
          </div>



          <div className={styles.bottom}>
            <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>

            <div>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer