import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import comingSoonImg from "/assets/comingsoon.png";

const FeatureAlert = ({ show, onClose, featureName }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
              maxWidth: "400px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={comingSoonImg}
              alt="Coming Soon"
              style={{ width: "100px", marginBottom: "1rem" }}
            />
            <h2>Feature Coming Soon!</h2>
            <p>
              The feature <strong>{featureName}</strong> will be available soon.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: "1rem",
                padding: "0.75rem 2rem",
                backgroundColor: "#7353BA",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureAlert;
