import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "./about.module.css";
import SidebarMenu from "../components/SidebarMenu";

function About() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <SidebarMenu />
      <h1>Welcome to the About Page</h1>
      <p>This is the About page content.</p>
    </div>
  );
}
export default About;
