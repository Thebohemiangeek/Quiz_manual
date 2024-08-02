"use client";

import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import styles from "./components/Hero/hero.module.css"; // Adjust the import as needed

const LandingPage = () => {
  const [showQuizModal, setShowQuizModal] = useState(false);

  const handleCloseModal = () => setShowQuizModal(false);

  return (
    <div>
      <Hero setShowQuizModal={setShowQuizModal} />
      <Modal
        show={showQuizModal}
        title="Quiz Modal"
        handleClose={handleCloseModal}
        className={styles.customModal}
      >
        <p>This is the quiz modal content.</p>
        {/* <button onClick={handleCloseModal}>Close</button> */}
      </Modal>
    </div>
  );
};

export default LandingPage;
