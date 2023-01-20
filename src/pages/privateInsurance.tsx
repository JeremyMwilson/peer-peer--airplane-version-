import React, { useState } from "react";
import styles from "./pages/privateInsurnace.module.css";
import axios from "axios";
import SidebarMenu from "../components/SidebarMenu";

const PrivateForm = () => {
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [householdSize, setHouseholdSize] = useState("");
  const [householdIncome, setHouseholdIncome] = useState("");
  const [medications, setMedications] = useState("");
  const [preExistingConditions, setPreExistingConditions] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      zipcode,
      phone,
      householdSize,
      householdIncome,
      medications,
      preExistingConditions,
    };

    try {
      const response = await axios.post("/api/send-email", formData);
      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <SidebarMenu />
      <React.Fragment>
        {!formSubmitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />

            <label htmlFor="household-size">Household Size</label>
            <input
              type="number"
              id="household-size"
              value={householdSize}
              onChange={(event) => setHouseholdSize(event.target.value)}
              required
            />

            <label htmlFor="household-income">Household Income</label>
            <input
              type="number"
              id="household-income"
              value={householdIncome}
              onChange={(event) => setHouseholdIncome(event.target.value)}
              required
            />

            <label htmlFor="medications">Medications</label>
            <textarea
              id="medications"
              value={medications}
              onChange={(event) => setMedications(event.target.value)}
            />

            <label htmlFor="pre-existing-conditions">
              Pre-existing Conditions
            </label>
            <textarea
              id="pre-existing-conditions"
              value={preExistingConditions}
              onChange={(event) => setPreExistingConditions(event.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className={styles.response}>
            <p>
              Thank you for contacting us. An agent will contact you shortly.
            </p>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default PrivateForm;
