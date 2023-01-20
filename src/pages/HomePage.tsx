import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import { Link } from "react-router-dom"; // Add this import
import "../App.css";

function HomePage() {
  return (
    <div className="HomePage">
      <SidebarMenu />
      <h1>The Health Insurance App</h1>
      <h2>The Health Insurance App</h2>
      <div>
        <a
          href="https://www.healthsherpa.com/?_agent_id=jonalan-king"
          target="_blank"
        >
          <img src="https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/334652823_6477533245608125_4398049342673506111_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Hzruij-8SQsAX-_2epm&_nc_ht=scontent.fewr1-6.fna&oh=00_AfAL6XeJY74aAKqBKKGaPQhQaezYZKlReGsx-pgCDKqhXQ&oe=640C50C9" />
          <h2>ACA Insurance</h2>
        </a>
        <Link to="/privateInsurance">
          <img src="https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/251638470_107070005113239_1034481088509788109_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=teqlMAaPacYAX-Snjtt&_nc_ht=scontent.fewr1-5.fna&oh=00_AfDLLZNaxk3eRZUtf0UBhx3QbMGoyx4fb5gj-1W6JHq-DA&oe=64053276" />
          <h2>Private Insurance</h2>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
