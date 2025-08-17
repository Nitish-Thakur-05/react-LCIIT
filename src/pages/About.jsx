import styles from "./About.module.css";
import team from "../assets/team.webp";
import { motion } from "motion/react";
import { useState } from "react";
import Social from "../components/social/Social";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const items = [
    `LCIIT is an ISO 9001:2015 certified chip level laptop repairing
     institute in Delhi. Our registered center is located at New Delhi, India.
     We offer professional Laptop Repairing Course, Desktop Motherboard Repairing Course,
     Laptop Schematic Diagram Training, Laptop Bios Editing Course, Desktop Motherboard Bios
     Editing Course, Laptop Hardware Chip level Repairing Course, Online Laptop Repairing Course,
     Online Desktop Motherboard Repairing Course, Self Learning Laptop Chip Level Repairing
     Video Course other Laptop computer related solutions. We are the masters in giving best Training
     for all models and brands of laptop at affordable fee structure. Our experts aim to offer quality
     Training in less fee. If you are in need of quality laptop service in and around Delhi, visit our
     office and get the best services from our well trained and proficient teachers.`,

    `We Also Provide Online Training in Laptop Chip Level Repairing, Online Training in Desktop
     Motherboard Repairing, Online Bios Editing Course, Laptop Repairing Video Course,
     Desktop Motherboard Repairing Video Course.`,

    `We have Equipped with all Modern and Latest Repairing Tools such as BGA Machine,
     Digital Storage Oscilloscope (DSO), Bios Programmer, IO Chip Programmer, Microscope,
     Advance Multi Meter, SMD Rework Station, DC Supply Machine Etc.`,

    `We are also a trusted distributor of all Testing and Repairing Tools used in Laptop Desktop
     Repairing. We deal in lot of testing and repairing tools as per customer’s demand. We are
     genuine professionals that’s why you can choose us because we give you best advice and
     affordable service regarding all types of latest Laptop Repairing Tools.`,

    `We also Provide Laptop Repairing Services to our customers. Our proficient faculty cum
     service engineer handles all kinds of laptop service and repairs with expertise. We tackle
     various problems to all latest laptop and desktop models from HP, Dell, Toshiba, Compaq,
     IBM, Lenovo and Sony with relative ease. Some of the most common problems include Laptop
     not Powering on, Laptop Dead, No Display, Laptop Battery Charging Problem Etc. Our experts
     diagnose and rectify the problem in minimum time.`,
  ];

  return (
    <>
      <Social />
      <div className={`${styles.aboutContainer}`}>
        <section className="container d-flex align-items-center justify-content-between flex-wrap py-5">
          {/* Left content */}
          <motion.div
            className={`${styles.aboutContent} mb-4`}
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="fw-bold">
              Our <span className="text-primary">Team</span>
            </h2>
            <ul className="list-unstyled">
              {/* Always show the first item */}
              <li className="my-3">{items[0]}</li>

              {/* Show remaining items only when expanded */}
              {showAll &&
                items.slice(1).map((item, index) => (
                  <li key={index} className="mb-3">
                    {item}
                  </li>
                ))}
            </ul>
            <button
              className="btn fw-semibold"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            className={`${styles.aboutImageResponsive} d-flex justify-content-center`}
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={team} alt="Our Team" className="img-fluid" />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;
