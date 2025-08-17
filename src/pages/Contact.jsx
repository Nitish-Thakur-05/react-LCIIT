import { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";
import Social from "../components/social/Social";

const Contact = () => {
  const [result, setResult] = useState("Send Message");
  const nameRegex = /^[A-Za-z\s]+$/; // letters and spaces only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email validation

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('object');
    setResult("Sending.....");
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
      if (!value.trim()) {
        setResult("Send Message");
        toast.warning("Please fill all the fields.");
        return; 
      }

      // check for name and first name
      if (
        (name === "firstName" || name === "lastName") &&
        !nameRegex.test(value.trim())
      ) {
        setResult("Send Message");
        toast.warning(`Please enter valid ${name}.`);
        return;
      }

      // check for email
      if (name === "email" && !emailRegex.test(value.trim())) {
        setResult("Send Message");
        toast.warning("Please enter a valid email address.");
        return;
      }
    }

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
      setResult("Send Message");
    } else {
      setResult("Send Message");
      toast.error("Failed To Submit Form");
      console.log(data.message);
    }
  };

  return (
    <section className={`${styles.contactContainer}`}>
      <Social />
      <ToastContainer />
      <div className={`${styles.contactSection} container`}>
        <div className="row g-4">
          {/* Left Column */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`${styles.contactBox} p-4 h-100`}>
              <span className={`${styles.tag}`}>Contact</span>
              <h2 className="fw-bold mt-3">Grow Your Skills With Us.</h2>
              <p className="text-muted">
                Start your journey in laptop and motherboard chip-level
                repairing with LCIIT. Build skills for a successful career
                today.
              </p>

              <div className="mt-4">
                {/* <LocationOnIcon /> */}
                <p className="fw-bold mb-1">
                  <i className="bi bi-geo-alt-fill"></i> Our Location
                </p>
                <p className="text-muted">
                  LCIIT, E2/172B, Street No. 4, Shastri Nagar, New Delhi
                </p>

                <p className="fw-bold mb-1">
                  <i className="bi bi-envelope-fill"></i> Email Us
                </p>
                <p className="text-muted">laptopcare.lciit@gmail.com</p>

                <p className="fw-bold mb-1">
                  <i className="bi bi-telephone-fill me-1"></i> Call Us
                </p>
                <p className="text-muted">+91 8010708080</p>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4">
                <a href="#">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter fs-4"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`${styles.contactBox} p-4 h-100`}>
              <h3 className="fw-bold">Send Us a Message</h3>
              <p className="text-muted">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      name="firstName"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="lastName"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className={result === 'Sending.....' ? `${styles.btnDisabled} w-100` : `${styles.btnCustom} w-100`}
                      disabled={result === "Sending....."}
                      
                    >
                      {result}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
