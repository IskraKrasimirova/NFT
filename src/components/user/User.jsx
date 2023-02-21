import React from "react";
import styles from "./User.module.scss";
import Avatar from "../avatar/Avatar";

export default function User({ name = '', info = '', avatar = '', size = 55, verified = false }) {
    return (
        <div className={styles.user}>
            <Avatar url={avatar} size={size} verified={verified} />
            <div className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>);
}