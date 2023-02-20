import React from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, ButtonBase } from "@mui/material";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <Grid Container className={classNames(styles.container)} maxWidth="xl">
            <Grid item xs={2}>
                <Logo />
            </Grid>
            <Grid item xs={6}>
                <div className={classNames(styles.searchContainer)}>
                    <SearchIcon />
                    <InputBase className={classNames(styles.searchField)} placeholder="Find assets, users and activity" />
                </div>
            </Grid>
            <Grid item xs={4} className={classNames(styles.buttonContainer)}>
                <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Home</ButtonBase>
                <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Activity</ButtonBase>
                <Button variant="contained" color="primary" className={classNames(styles.button)}>EXPLORE</Button>
            </Grid>
        </Grid>
    );
}