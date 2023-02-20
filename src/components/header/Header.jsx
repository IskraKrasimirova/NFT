import React from "react";
import styles from "./Header.module.scss";
import Logo from "..logo/Logo";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Grid Container className={classNames(styles.container)} maxWidth="xl">
                <Grid item xs={2}>
                    <Logo />
                </Grid>
                <Grid item xs={6}>
                    <SearchIcon />
                    <InputBase className={classNames(styles.searchField)} placeholder="Find assets, users and activity..." />
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </div>

    );
}