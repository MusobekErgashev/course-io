import React from 'react'
import "../../index.css"
import styles from "./profile.module.css"
import profilePic from '../../assets/profile-pic.png'
import addImg from "../../assets/add-photo.png"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Profile = () => {
    return (
        <React.Fragment>
            <Header />

            <div className="main-container">
                <div className={styles.container}>
                    <div className={styles.top}>
                        <h3 className={styles.sectionTitle}>My Account</h3>

                        <ul className={styles.navigation}>
                            <a href="#">
                                <li className={styles.navLinks}>Profile</li>
                            </a>
                            <a href="#">
                                <li className={styles.navLinks}>Personalisation</li>
                            </a>
                            <a href="#">
                                <li className={styles.navLinks}>Account</li>
                            </a>
                            <a href="#">
                                <li className={styles.navLinks}>Payment Methods</li>
                            </a>
                            <a href="#">
                                <li className={styles.navLinks}>Notifications</li>
                            </a>
                            <a href="#">
                                <li className={styles.navLinks}>Privacy</li>
                            </a>
                        </ul>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.profileBox}>
                            <img src={profilePic} alt="" className={styles.profilePic} />
                            <img src={addImg} alt="" className={styles.addImg} />
                        </div>

                        <form className={styles.form}>
                            <label>First Name</label>
                            <input type="text" className={styles.input}/>
                            <label>Last Name</label>
                            <input type="text" className={styles.input}/>
                            <label>Headline</label>
                            <input type="text" className={styles.input}/>
                            <label>Language</label>
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Russian</option>
                            </select>
                            <label>Link</label>
                            <input type="text" className={styles.input} />

                            <button className={styles.formSubmitBtn}>Save</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Profile