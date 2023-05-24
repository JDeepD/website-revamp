import { Component, Signal, createSignal } from "solid-js";
import styles from "./Navbar.module.scss";

const Navbar: Component = (props) => {
  const [isOpen, setOpen] = createSignal(false);
  const hamtoggle = () => {
    console.log("Clicked");
    setOpen((current) => !current);
  };

  return (
    <nav class={styles.navbar}>
      <div class={styles.hambtn} onClick={hamtoggle}>
        <span classList={{ [styles.hamburger]: true }}></span>
        <span classList={{ [styles.hamburger]: true }}></span>
        <span classList={{ [styles.hamburger]: true }}></span>
        <div
          classList={{ [styles.menu]: true, [styles.menuopen]: isOpen() }}
        >
          <span>Home</span>
          <span>About</span>
          <span>Projects</span>
          <span>Resume</span>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
