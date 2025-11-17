import React from 'react'
import "../../index.css"
import styles from "./header.module.css"
import logo from "../../assets/Logo.png"
import search from "../../assets/search.png"
import cart from "../../assets/shopping.png"
import signup from "../../assets/signup.png"

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.mainHeaderBox}>
                <div className={styles.header}>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>

                    <form className={styles.searchForm}>
                        <input type="text" placeholder='Search for course' className={styles.searchInput} />
                        <img src={search} alt="" />
                    </form>

                    <ul className={styles.rightBar}>
                        <li className={styles.rightBarCartItem}>
                            <img src={cart} alt="" />
                        </li>
                        <li className={styles.rightBarItems}>
                            <p className={styles.loginText}>Login</p>
                        </li>
                        <li className={styles.rightBarItems}>
                            <img src={signup} alt="" />
                            <p className={styles.signUpText}>Sign Up</p>
                        </li>
                    </ul>
                </div></div>
        </React.Fragment>
    )
}

export default Header