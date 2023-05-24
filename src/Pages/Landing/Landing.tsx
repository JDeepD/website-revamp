import type { Component } from "solid-js";
import styles from "./Landing.module.scss";
import { Navbar } from "../../Components";

const LandingPage: Component = (props) => {
  return <div class={styles.main}>
    <Navbar />
  </div>;
};

export default LandingPage;