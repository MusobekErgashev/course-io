import React, { useState, useEffect } from 'react'
import "../../index.css"
import styles from "./home.module.css"
import userIcon from "../../assets/person.png"
import starIcon from "../../assets/star-full.png"
import halfStarIcon from "../../assets/star-half.png"
import bigOfferImg from "../../assets/join-klevr.png"

const Home = () => {
  const [myCourseData, setMyCourseData] = useState([])
  const [myTrendingCourseData, setMyTrendingCourseData] = useState([])
  const [myUpcomingWebinarData, setMyUpcomingWebinarData] = useState([])

  useEffect(() => {
    async function getCourses() {
      const res = await fetch('/db.json')
      const json = await res.json()
      setMyCourseData(json.courseData || [])
    }

    async function getTrendingCourses() {
      const res = await fetch('/db.json')
      const json = await res.json()
      setMyTrendingCourseData(json.trendingCourse || [])
    }

    async function getUpcomingWebinar() {
      const res = await fetch('/db.json')
      const json = await res.json()
      setMyUpcomingWebinarData(json.upcomingWebinar || [])
    }

    getCourses()
    getTrendingCourses()
    getUpcomingWebinar()
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
              <h3 className={styles.sectionTitle}>Browse Our Top Courses</h3>

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
                {myCourseData.map((myData, index) => {
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

      <div className={styles.section3}>
        <div className="main-container">
          <div className="container">
            <div className={styles.container}>
              <h1 className={styles.sectionTitle}>Trending Courses</h1>

              <div className={styles.section3Main}>
                <div className={styles.section3LeftSide}>
                  <h4 className={styles.section3UserName}>Ana Kursova</h4>
                  <h1 className={styles.section3UserTitle}>Masterclass in Design Thinking, Innovation & Creativity</h1>
                </div>

                <div className={styles.section3RightSide}>
                  <ul className={styles.courseCards}>
                    {myTrendingCourseData.map((myData, index) => {
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
                          <p className={styles.courseCardSubTitle}>{myData.subTitle}</p>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section4}>
        <div className="main-container">
          <div className="container">
            <div className={styles.container}>
              <h1 className={styles.sectionTitle}>Upcoming Webinar</h1>

              <ul className={styles.courseCards}>
                {myUpcomingWebinarData.map((myData, index) => {
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
                      <p className={styles.courseCardSubTitle}>{myData.subTitle}</p>
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
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section5}>
        <h1 className={styles.section5Title}>Get personal learning recommendations based on your needs</h1>
        <button className={styles.section5Btn}>Get Started</button>
      </div>
    </React.Fragment >
  )
}

export default Home