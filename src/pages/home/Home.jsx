import React, { useState, useEffect } from 'react'
import "../../index.css"
import styles from "./home.module.css"
import userIcon from "../../assets/person.png"
import starIcon from "../../assets/star-full.png"
import halfStarIcon from "../../assets/star-half.png"
import bigOfferImg from "../../assets/join-klevr.png"

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getCourses() {
      try {
        const res = await fetch('/db.json')
        if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
        const json = await res.json()
        setData(json.courseData || [])
      } catch (err) {
        console.error('Failed to load course data:', err)
      }
    }

    getCourses()
  }, [])

  return (
    <React.Fragment>
      <div className={styles.homeMainContainer}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Learn something new everyday.</h1>
          <p className={styles.subTitle}>Become professionals and ready to join the world.</p>
        </div>

        <form className={styles.mainFormSection}>
          <h3 className={styles.formTitle}>What do you want to learn?</h3>
          <div className={styles.inputBox}>
            <input type="text" placeholder='Find courses, skills, software, etc' className={styles.inputs} />
            <input type="text" placeholder='Categories' className={styles.inputs} />
            <input type="text" placeholder='Topic' className={styles.inputs} />
            <button className={styles.formSubmitBtn}>Search</button>
          </div>
        </form>
      </div>

      <div className={styles.section2}>
        <div className="main-container">
          <div className="container">
            <div className={styles.container}>
              <h3 className={styles.section2Title}>Browse Our Top Courses</h3>

              <ul className={styles.navigation}>
                <a href="#">
                  <li className={styles.navLinks}>Design</li>
                </a>
                <a href="#">
                  <li className={styles.navLinks}>Developer</li>
                </a>
                <a href="#">
                  <li className={styles.navLinks}>Business</li>
                </a>
                <a href="#">
                  <li className={styles.navLinks}>Marketing</li>
                </a>
                <a href="#">
                  <li className={styles.navLinks}>Photography</li>
                </a>
              </ul>

              <ul className={styles.courseCards}>
                {data.map((myData, index) => {
                  return (
                    <li className={styles.courseCardItems} key={index}>
                      <div className={styles.courseCardImgBox}>
                        <img src={myData.img} alt="card" className={styles.courseCardImg} />
                      </div>
                      <h5 className={styles.courseCardTitle}>{myData.title}</h5>
                      <span className={styles.courseCardUserBox}>
                        <img src={userIcon} alt="" />
                        <p className={styles.courseCardUserName}>{myData.username}</p>
                      </span>
                      <span className={styles.courseCardRating}>
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />

                        <p>(1.2K)</p>
                      </span>

                      <span className={styles.courseCardPriceBox}>
                        <h4 className={styles.courseCardPrice}>${myData.price}</h4>
                        <p className={styles.courseCardUnPrice}>${myData.unPrice}</p>
                      </span>
                    </li>
                  )
                })}

                {/* <li className={styles.courseCardItems}>
                  <div className={styles.courseCardImgBox}>
                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="card" className={styles.courseCardImg} />
                  </div>
                  <h5 className={styles.courseCardTitle}>Adobe Illustrator Scretch Course</h5>
                  <span className={styles.courseCardUserBox}>
                    <img src={userIcon} alt="" />
                    <p className={styles.courseCardUserName}>Kitani Studio</p>
                  </span>
                  <span className={styles.courseCardRating}>
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />

                    <p>(1.2K)</p>
                  </span>

                  <span className={styles.courseCardPriceBox}>
                    <h4 className={styles.courseCardPrice}>$24.92</h4>
                    <p className={styles.courseCardUnPrice}>$32.90</p>
                  </span>
                </li> */}
              </ul>

              <div className={styles.bigOffer}>
                <div className={styles.bigOfferLeft}>
                  <h1 className={styles.offerTitle}>Join Klevr now to get 35% off</h1>
                  <p className={styles.offerSubTitle}>With our responsive themes and mobile and desktop apps,
                    enjoy a seamless experience on any device so will your blog the best visitors</p>
                  <button className={styles.offerBtn}>Join Klevr</button>
                </div>

                <div className={styles.bigOfferRight}>
                  <img src={bigOfferImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Home