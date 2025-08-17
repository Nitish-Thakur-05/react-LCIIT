import styles from "./Home.module.css";
import classImg1 from "../assets/classroom.jpg";
import classImg2 from "../assets/classroom2.jpg";
import classImg3 from "../assets/classroom3.jpg";
import classImg4 from "../assets/classroom4.jpg";
import classImg5 from "../assets/classroom5.jpg";
import classImg6 from "../assets/classroom6.jpg";
import chipLevelReparing from "../assets/chipLevelReparing.png";
import onlineBiosEditing from "../assets/onlineBiosEditing.png";
import onlineChipLevelReparing from "../assets/onlineChipLevelReparing.png";
import dsoBasicSetting from "../assets/dsoBasicSetting.png";
import biosEditingApp from "../assets/biosEditingApp.png";
import onBoardRam from "../assets/onBoardRam.png";
import isoCertified from "../assets/1isoCertified.png";
import onlineOfline from "../assets/2onlineOfline.png";
import tools from "../assets/3tools.png";
import courses from "../assets/4courses.png";
import teachers from "../assets/5teachers.png";
import trustedReputation from "../assets/6trustedReputation.png";
import handsOnTraning from "../assets/7handsOnTraning.png";
import traning from "../assets/8traning.png";
import fees from "../assets/9fees.png";
import tpmErr from "../assets/tpmErr.png";
import dellBiosPassword from "../assets/dellBiosPassword.png";
import biosPassword from "../assets/biosPassword.png";
import forFresher from "../assets/forFresher.png";
import biosEditing from "../assets/biosEditing.png";
import Social from "../components/social/Social";
import certificate from "../assets/certificate.jpg";
import Button from "../components/button/Button";
// import Spline from "@splinetool/react-spline";
import Course from "../components/course/Course";
import { Link, useOutletContext } from "react-router-dom";
import { motion } from "motion/react";
import { lazy, Suspense, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import SkletonModal from "../components/skletonModal/SkletonModal";

const Location = lazy(() => import("../components/location/Location"));
const Modal = lazy(() => import("../components/modal/Modal"));
// const Spline = lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  const { isModalOpen, setIsModalOpen } = useOutletContext();
  const MotionButton = motion.create(Button);
  const MotionLink = motion.create(Link);
  const MotionCourse = motion.create(Course);
  const [hasAnimated, setHasAnimated] = useState(false);


  const closeModal = (modalName) => {
    setIsModalOpen((prev) => ({
      ...prev,
      [modalName]: false,
    }));
  };

  return (
    <>
      <Social />
      <section className={`${styles.homeContainer}`}>
        <div
          className={`container d-flex justify-content-between align-items-center`}
        >
          <div className={`${styles.content}`}>
            <motion.h1
              initial={{ transform: "translateX(-50%)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.title} fw-bold`}
            >
              Your Shortcut to
              <br />
              <span className={`${styles.titleSpan}`}>Hardware Expertise.</span>
            </motion.h1>
            <motion.p
              initial={{ transform: "translateX(-50%)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3"
            >
              Learn chip-level laptop & desktop motherboard repairing with
              hands-on training from experts. From BIOS editing to schematic
              reading, we equip you with real-world skills and the latest tools.
              You’ll master soldering, chip replacement, and advanced circuit
              diagnostics while working with industry-grade equipment. Our
              training covers everything from understanding power sequences to
              pinpointing and fixing faults with speed and accuracy. With
              practical experience, expert guidance, and certification, you’ll
              be ready to step confidently into the hardware repair industry.
            </motion.p>
            <div
              className={`${styles.heroPageBtnContainer} d-flex align-items-center`}
            >
              <MotionLink
                initial={{ transform: "translateY(100%)", opacity: 0 }}
                whileInView={{ transform: "translateY(0)", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                to="/about"
                className={styles.heroPageBtn1}
              >
                About
              </MotionLink>
              <MotionButton
                initial={{ transform: "translateY(100%)", opacity: 0 }}
                whileInView={{ transform: "translateY(0)", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className1={styles.heroPageBtn2}
                buttonName="Download"
                link="https://play.google.com/store/search?q=lciit&c=apps&hl=en_IN"
                target="_blank"
              />
            </div>
          </div>

          <motion.div
            initial={{ transform: "translateY(-100%)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${styles.robotSplineContainer} w-50 overflow-hidden`}
          >
            {/* <Suspense fallback={<div>Loading......</div>}>
              <Spline
                scene="https://prod.spline.design/BoWg-dch2T9e59sl/scene.splinecode"
                className={`${styles.robotSpline}`}
              />
            </Suspense> */}
          </motion.div>
        </div>
      </section>

      <Carousel
        img1={classImg1}
        img2={classImg2}
        img3={classImg3}
        img4={classImg4}
        img5={classImg5}
        img6={classImg6}
      />

      <section className={`${styles.whyUs}`}>
        <h2 className="text-center text-uppercase">Why LCIIT ?</h2>
        <p className="text-center m-0">
          Computer Hardware for Absolute Beginners – Start Your Tech Journey
        </p>
        <div className="col mt-4">
          <div
            id="banner-slider"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <img src={isoCertified} className=" w-25" alt="..." />
                <img src={onlineOfline} className=" w-25" alt="..." />
                <img src={tools} className=" w-25" alt="..." />
              </div>
              <div className="carousel-item text-center">
                <img src={courses} className=" w-25" alt="..." />
                <img src={teachers} className=" w-25" alt="..." />
                <img src={trustedReputation} className=" w-25" alt="..." />
              </div>
              <div className="carousel-item text-center">
                <img src={handsOnTraning} className=" w-25" alt="..." />
                <img src={traning} className=" w-25" alt="..." />
                <img src={fees} className=" w-25" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ transform: "scale(0.5)", opacity: 0 }}
        whileInView={{ transform: "scale(1)", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.certificate} mt-5 d-flex justify-content-center align-items-center flex-column`}
      >
        <img
          src={certificate}
          alt="certificate img"
          className="img-fluid w-25 h-25"
        />
        <p className="mb-0 mt-3 fw-bold">CERTIFICATE DEMO</p>
      </motion.section>

      <section id="courses" className={`${styles.courses} mt-5`}>
        <div className="container">
          <h2 className="text-center text-uppercase">
            Classroom Training | LCIIT Delhi
          </h2>
          <p className="text-center m-0">
            Explore our expert-led sessions to experience comprehensive courses
            and practical, industry-ready training at LCIIT Delhi.
          </p>
        </div>

        <div className="container d-flex justify-content-around mt-2 align-items-center px-5 flex-wrap row-gap-5">
          <MotionCourse
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={chipLevelReparing}
            title="Laptop Chip Level Repairing Course Basic To Advance Level."
            text="Learn chip-level laptop & desktop motherboard repairing with
              hands-on training from experts. From BIOS editing to schematic
              reading, we equip you with real-world skills and the latest tools.
              You’ll master soldering, chip replacement, and advanced circuit
              diagnostics while working with industry-grade equipment. Our
              training covers everything from understanding power sequences to
              pinpointing and fixing faults with speed and accuracy. With
              practical experience, expert guidance, and certification, you’ll
              be ready to step confidently into the hardware repair industry."
            onclick={() =>
              setIsModalOpen((prev) => ({ ...prev, advanceReparing: true }))
            }
          />
          {isModalOpen.advanceReparing && (
            <Suspense fallback={<SkletonModal />}>
              <Modal
                closeModal={() => closeModal("advanceReparing")}
                header="Laptop Chip Level Repairing Course Basic To Advance Level."
                footer={
                  <div
                    onClick={() =>
                      setIsModalOpen({
                        advanceReparing: false,
                        fresherReparing: false,
                        biosEditing: false,
                        onlineBiosEditing: false,
                        onlineChipLevelReparing: false,
                      })
                    }
                    className="d-flex justify-content-center align-items-center"
                  >
                    <button className={styles.modalBtn}>Back</button>
                  </div>
                }
              >
                <div className={`${styles.modalBody}`}>
                  <ul>
                    <li>
                      <strong>Course Code:</strong> LMCT - Basic to Advance
                      Level (Complete Course)
                    </li>
                    <li>
                      <strong>Eligibility:</strong> Designed for individuals
                      with Computer Hardware knowledge, OS/Software installation
                      experience, or Mobile Repairing knowledge. Must be able to
                      troubleshoot laptops at the software level.{" "}
                      <em>Not suitable for pure freshers.</em>
                    </li>
                    <li>
                      <strong>Next Batch:</strong> 10:30 AM, 9th June 2025
                    </li>
                    <li>
                      <strong>Duration:</strong> 4 Months (Total 4 Modules)
                    </li>
                    <li>
                      <strong>Timing:</strong> Daily 2 hrs class + 3 hrs
                      practice
                    </li>
                    <li>
                      <strong>Fee:</strong> ₹30,000/-
                    </li>
                    <li>
                      <strong>Installment:</strong> ₹15,000 at admission +
                      ₹15,000 in the second month
                    </li>
                    <li>
                      <strong>One-time Payment:</strong> ₹27,000/- at admission
                    </li>
                    <li>
                      <strong>Optional:</strong> ₹10,000/- for 1 month extra
                      Service Center Training (full day)
                    </li>
                  </ul>

                  <h3>Course Contents</h3>
                  <ol>
                    <li>
                      <strong>Module 1:</strong> Basic Electronics —
                      application/testing of components, voltage divider,
                      pull-up/pull-down concepts, MOSFET working/switching,
                      regulators, and more.
                      <em>(10-15 days, Trainer – Santosh Kumar Thakur, B.E)</em>
                    </li>
                    <li>
                      <strong>Module 2:</strong> Circuit tracing, motherboard
                      identification, schematic basics, BIOS/IO programming,
                      soldering, troubleshooting, tool knowledge.
                      <em>(15-25 days)</em>
                    </li>
                    <li>
                      <strong>Module 3:</strong> Advanced schematic explanation
                      (up to 11th gen), all laptop circuits, troubleshooting,
                      Apple MacBook basics, board view, DSO usage, graphics
                      conversion, etc.
                    </li>
                    <li>
                      <strong>Module 4:</strong> BIOS editing (all brands),
                      extraction methods, password removal, Lenovo ThinkPad
                      unlocking, ME/CSME/TXE cleaning, and advanced BIOS tools.
                      <em>(8-10 days)</em>
                    </li>
                  </ol>

                  <p>
                    <strong>Note:</strong> Lifetime access to LCIIT Schematic
                    World Telegram Channel, BIOS Channel, Board View Channel,
                    software tools, graphics conversion data, and more.
                  </p>

                  <p>
                    <strong>Hostel Facility:</strong> ₹5,000/month (without
                    food). Includes kitchen, gas, refrigerator, RO water,
                    washing machine, cooler, Wi-Fi, and tiffin facility.
                  </p>
                </div>
              </Modal>
            </Suspense>
          )}
          <MotionCourse
            initial={{ transform: "scale(0.5)", opacity: 0 }}
            whileInView={{ transform: "scale(1)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={forFresher}
            title="Laptop Desktop Chip Level Repairing Course for Freshers."
            text="Join our Laptop & Desktop Chip-Level Repairing Course designed for freshers. Gain hands-on experience with motherboard diagnostics, BIOS editing, and schematic reading under expert guidance. Learn soldering, chip replacement, and advanced circuit troubleshooting using industry-grade tools. Understand power sequences, identify faults quickly, and repair with precision. Our practical training ensures you develop real-world skills, boosting confidence in hardware repair. Complete the course with certification and step into the IT hardware industry ready to excel professionally."
            onclick={() =>
              setIsModalOpen((prev) => ({ ...prev, fresherReparing: true }))
            }
          />
          {isModalOpen.fresherReparing && (
            <Suspense fallback={<SkletonModal />}>
              <Modal
                closeModal={() => closeModal("fresherReparing")}
                header="Laptop Desktop Chip Level Repairing Course for Freshers."
                footer={
                  <div
                    onClick={() =>
                      setIsModalOpen({
                        advanceReparing: false,
                        fresherReparing: false,
                        biosEditing: false,
                        onlineBiosEditing: false,
                        onlineChipLevelReparing: false,
                      })
                    }
                    className="d-flex justify-content-center align-items-center"
                  >
                    <button className={styles.modalBtn}>Back</button>
                  </div>
                }
              >
                <div className={`${styles.modalBody}`}>
                  <p>
                    ❇️ <strong>Course Code:</strong> LDMCT – Basic to Advance
                    Level (Complete Course)
                  </p>
                  <p>
                    ❇️ <strong>Eligibility:</strong> This course is designed for
                    pure freshers who are interested in repairing / seriously
                    ready to build a career in laptop repairing industries /
                    12th passed.
                  </p>
                  <p>
                    <strong>NEXT BATCH:</strong> 7 OCTOBER 2024, 9:30 AM Morning
                  </p>
                  <p>
                    ❇️ <strong>Course Duration:</strong> 6 Month [ 7/6 Module ]
                  </p>
                  <p>
                    ❇️ <strong>Timing:</strong> Daily 2 Hrs. Class + 3 Hrs.
                    Practice. (Last Month Full Day Service Center Training)
                  </p>
                  <p>
                    ❇️ <strong>Course Fee:</strong> Rs. 50,000/- (Rs. 40,000
                    Without Last Month Service Center Training)
                  </p>
                  <p>
                    ❇️ <strong>Installment:</strong> Rs. 15,000/- at the time of
                    Admission + Rs. 15,000/- Second Month + Rs. 10,000/- Third
                    Month + Rs. 10,000/- Fourth Month
                  </p>
                  <p>
                    ❇️ <strong>One Time Payment:</strong> OPTION 1: Rs. 27,000/-
                    at the time of Admission + Rs. 18,000/- Second Month (2
                    Installments)
                  </p>

                  <h3>COURSE CONTENTS</h3>

                  <p>
                    ❇️ <strong>Module 1:</strong> Basic Electronics application
                    of all electronic components, testing of all electronic
                    components, voltage divider, pull-up & pull-down concept,
                    logic high and logic low concept, MOSFET working and
                    switching concepts, dual MOSFET concept, buck and boost
                    regulator, LDO, linear regulator concept (10–15 days,
                    Trainer – Santosh Kumar Thakur, B.E).
                  </p>
                  <p>
                    ❇️ <strong>Module 2:</strong> Laptop
                    assembling/disassembling, soldering/desoldering of all
                    electronic components/ports, use of repairing tools like DC
                    power supply machine, SMD rework station, soldering iron,
                    BGA machine, etc.
                  </p>
                  <p>
                    ❇️ <strong>Module 3:</strong> Circuit tracing concept (basic
                    level), practical tracing of all laptop circuits,
                    identification of laptop motherboard generation-wise and
                    architecture-wise, basic-level schematic circuit
                    explanation, BIOS programming, IO programming, DC machine
                    usage, basic-level laptop troubleshooting, short circuit
                    removal, BGA, SMD, screwdriver usage, and knowledge of all
                    types of testing and repairing tools (optional) (15–25
                    days).
                  </p>
                  <p>
                    ❇️ <strong>Module 4:</strong> Advanced-level schematic
                    explanation up to 11th generation
                    (Quanta/Compal/Wistron/LCFC) including circuits such as VIN
                    circuit, step-down circuit, enabling logic, battery charging
                    circuit, IO chip, RAM supply, CPU core circuit, load switch
                    circuits, 1.8V ALW, 1V ALW, VPP, VTT, VDDQ, complete voltage
                    circuits, PSID, adapter ID, SIO to PCH communication, SATA,
                    SSD, USB, fan controller, thermal circuit, keyboard,
                    touchpad, sound, Wi-Fi, power sequence, DSO, board view,
                    LVDS/EDP circuit, RTC circuit, green clock concept, onboard
                    RAM disable, graphics conversion, etc. Complete
                    troubleshooting for various laptop issues, plus Apple
                    MacBook basic overview.
                  </p>
                  <p>
                    ❇️ <strong>Module 5:</strong> BIOS editing for all major
                    brands (HP/ACER/DELL/ASUS/LENOVO) up to 11th generation, all
                    extraction methods, ME/CSME/TXE cleaning, AMI BIOS
                    extraction, password removal, Lenovo ThinkPad BIOS unlocking
                    methods, BIOS extractor usage, etc.
                  </p>
                  <p>
                    ❇️ <strong>Module 6:</strong> Desktop motherboard repair
                    training (5th series to 500 series), schematic training,
                    BIOS editing, short circuit solutions, power-on problem
                    solutions, no display troubleshooting, problem finding via
                    debug card and DSO (20–25 days).
                  </p>
                  <p>
                    ❇️ <strong>Module 7:</strong> Service center training –
                    full-day onboard practical practice for self-confidence
                    (last 1 month).
                  </p>

                  <p>
                    ❇️ <strong>Note:</strong> Lifetime access to LCIIT Schematic
                    World Telegram Channel, BIOS Channel, Board View Channel,
                    Support Group, all BIOS editing software tools, graphics
                    conversion data, RAM disabling data, Dell Latitude CD3301 IC
                    bypassing data, Lenovo ThinkPad patch BIOS collection, etc.
                  </p>

                  <p>
                    ❇️ <strong>Hostel facility:</strong> Rs. 5,000/- per month
                    (without food) – kitchen, gas, refrigerator, RO water,
                    washing machine, cooler, Wi-Fi, tiffin facility available.
                  </p>
                </div>
              </Modal>
            </Suspense>
          )}
          <MotionCourse
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={biosEditing}
            title="Laptop Bios Editing Course – Classroom Training."
            text="Enroll in our Laptop BIOS Editing Course with classroom training. Perfect for beginners, this course offers hands-on experience in BIOS configuration, password removal, firmware updates, and advanced troubleshooting. Learn to safely modify BIOS settings, recover locked systems, and optimize laptop performance under expert guidance. Practical sessions with real laptops ensure you gain industry-ready skills. With comprehensive lessons, hands-on practice, and certification, you’ll confidently handle BIOS-related challenges and step into the hardware repair field equipped with essential expertise."
            onclick={() =>
              setIsModalOpen((prev) => ({ ...prev, biosEditing: true }))
            }
          />
          {isModalOpen.biosEditing && (
            <Suspense fallback={<SkletonModal />}>
              <Modal
                closeModal={() => closeModal("biosEditing")}
                header="Laptop Bios Editing Course – Classroom Training."
                footer={
                  <div
                    onClick={() =>
                      setIsModalOpen({
                        advanceReparing: false,
                        fresherReparing: false,
                        biosEditing: false,
                        onlineBiosEditing: false,
                        onlineChipLevelReparing: false,
                      })
                    }
                    className="d-flex justify-content-center align-items-center"
                  >
                    <button className={styles.modalBtn}>Back</button>
                  </div>
                }
              >
                <div className={styles.courseDetails}>
                  <h3>Course Duration</h3>
                  <p>8 Days* Classroom Training</p>

                  <h3>Course Fee</h3>
                  <p>
                    Rs. 9,000/- <small>(Rs. Nine Thousand Only)</small>
                  </p>

                  <h3>Syllabus</h3>
                  <ol>
                    <li>
                      BIOS EDITING BASICS PRE-KNOWLEDGE (BIOS SIZE CALCULATION /
                      BIOS SIZE DETERMINATION, BIOS EDITING TOOL ETC)
                    </li>
                    <li>
                      ME REGION CLEAN CONCEPT (Version 6 to 10) and TXE REGION
                      CLEAN (Version 1/2/3/4)
                    </li>
                    <li>CSME REGION CLEAN CONCEPT (Version 11 to 15)</li>
                    <li>2 File ME/CSME Region Clean</li>
                    <li>HP BIOS Editing – Home Series Model</li>
                    <li>HP BIOS Editing – 2 BIOS Chip Method</li>
                    <li>HP BIOS Editing – Decrypter Tool Method</li>
                    <li>HP Commercial Model BIOS Editing</li>
                    <li>HP AMI BIOS Editing by AMIUCP Tool</li>
                    <li>
                      DELL BIOS Editing – RAR Extraction / Command Extraction /
                      Temp Method / Dell BIOX Extractor Method
                    </li>
                    <li>
                      DELL / Lenovo / Acer BIOS Editing by Inside BIOS Extractor
                    </li>
                    <li>ASUS BIOS Editing</li>
                    <li>Acer BIOS Editing</li>
                    <li>Lenovo BIOS Editing</li>
                    <li>BIOS Padding Trick</li>
                    <li>HP DMI Tool</li>
                    <li>BIOS OS Key Trick</li>
                    <li>Onboard RAM Disable</li>
                    <li>All Brand Unlocking Common Method</li>
                    <li>HP Consumer Model Unlocking</li>
                    <li>HP Corporate Model Unlocking</li>
                    <li>HP G7/G8 Series Unlocking</li>
                    <li>Apple Unlocking and Serial Number</li>
                    <li>Lenovo ThinkPad Unlocking Patch Method</li>
                    <li>Lenovo ThinkPad Unlocking Direct Flash Method</li>
                    <li>DELL 8FC8 Unlocking and many more</li>
                  </ol>

                  <h3>BIOS Editing Basic Tools List Used in This Course</h3>
                  <ol>
                    <li>Hex Editor</li>
                    <li>WinRAR</li>
                    <li>UEFI Replacer</li>
                    <li>UEFI Viewer</li>
                    <li>Python</li>
                    <li>Dell BIOS Extractor</li>
                    <li>Lenovo BIOS Extractor</li>
                    <li>AMIUCP 1.07</li>
                    <li>HP BIOS Decrypter Tool</li>
                    <li>Inside BIOS Extractor</li>
                    <li>AMI BIOS Guard Extractor</li>
                    <li>ME Analyzer</li>
                    <li>ME System Tool Collection (Version 6 to 16)</li>
                    <li>ME Repository Pack Collection (Version 6 to 16)</li>
                    <li>HxD Editor</li>
                  </ol>

                  <h3>Note</h3>
                  <p>
                    Free Access to{" "}
                    <strong>LCIIT Bios World Telegram Channel</strong> for
                    Laptop Main and EC Bios, ME & TXE Region Repository Pack /
                    System Tools / ME Analyzer / UEFI Tool, Lenovo and Dell BIOS
                    Extractor with all BIOS editing tools are given to students
                    with this course.
                  </p>
                </div>
              </Modal>
            </Suspense>
          )}
        </div>
      </section>

      <section id="onlineCourses" className={`${styles.courses} bg-white mt-3`}>
        <div className="container">
          <h2 className="text-center text-uppercase">
            Online video courses | LCIIT Delhi
          </h2>
          <p className="text-center m-0">
            Explore our video tutorials to learn about the comprehensive courses
            and real-world training at LCIIT.
          </p>
        </div>

        <div className="container d-flex justify-content-around mt-2 align-items-center px-5 flex-wrap row-gap-5">
          <MotionCourse
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={onlineBiosEditing}
            title="Online Laptop Bios Editing Course – Online Video Course."
            text="Join our Online Laptop BIOS Editing Course through easy-to-follow video lessons. Designed for beginners, this course teaches BIOS configuration, password removal, firmware updates, and advanced troubleshooting from the comfort of your home. Gain practical knowledge with step-by-step demonstrations and real-world examples. Learn to safely modify BIOS settings, recover locked systems, and optimize laptop performance. With expert guidance, lifetime access to videos, and certification upon completion, you’ll acquire the skills to confidently handle BIOS-related challenges in the hardware repair industry."
            onclick={() =>
              setIsModalOpen((prev) => ({ ...prev, onlineBiosEditing: true }))
            }
          />
          {isModalOpen.onlineBiosEditing && (
            <Suspense fallback={<SkletonModal />}>
              <Modal
                closeModal={() => closeModal("onlineBiosEditing")}
                header="Online Laptop Bios Editing Course – Online Video Course.."
                footer={
                  <div
                    onClick={() =>
                      setIsModalOpen({
                        advanceReparing: false,
                        fresherReparing: false,
                        biosEditing: false,
                        onlineBiosEditing: false,
                        onlineChipLevelReparing: false,
                      })
                    }
                    className="d-flex justify-content-center align-items-center"
                  >
                    <button className={styles.modalBtn}>Back</button>
                  </div>
                }
              >
                <div className={`${styles.modalBody}`}>
                  <ul>
                    <li>
                      <strong>Course Duration:</strong> Approx. 80 Videos (EXE)
                      for Self Learning Video Course with Lifetime Updates*
                      <em>(Lifetime Updates as per Terms and Conditions)</em>
                    </li>
                    <li>
                      <strong>Course Fee:</strong> Rs. 9,000/- (Rs. Nine
                      Thousand Only)
                    </li>
                    <li>
                      <strong>Syllabus:</strong>
                    </li>
                  </ul>

                  <ol>
                    <li>
                      BIOS EDITING BASICS PRE-KNOWLEDGE (BIOS SIZE
                      CALCULATION/BIOS SIZE DETERMINATION, BIOS EDITING TOOL
                      ETC)
                    </li>
                    <li>
                      ME REGION CLEAN CONCEPT (VERSION 6 TO 10) AND TXE REGION
                      CLEAN (VERSION 1/2/3/4)
                    </li>
                    <li>CSME REGION CLEAN CONCEPT (VERSION 11 TO 15)</li>
                    <li>2 FILE ME/CSME REGION CLEAN</li>
                    <li>HP BIOS EDITING – HOME SERIES MODEL</li>
                    <li>HP BIOS EDITING – 2 BIOS CHIP METHOD</li>
                    <li>HP BIOS EDITING – DECRYPTER TOOL METHOD</li>
                    <li>HP COMMERCIAL MODEL BIOS EDITING</li>
                    <li>HP AMI BIOS EDITING BY AMIUCP TOOL</li>
                    <li>
                      DELL BIOS EDITING – RAR EXTRACTION METHOD/COMMAND
                      EXTRACTION METHOD/TEMP METHOD/DELL BIOX EXTRACTOR METHOD
                    </li>
                    <li>
                      DELL / LENOVO/ ACER BIOS EDITING BY INSIDE BIOS EXTRACTOR
                    </li>
                    <li>ASUS BIOS EDITING</li>
                    <li>ACER BIOS EDITING</li>
                    <li>LENOVO BIOS EDITING</li>
                    <li>BIOS PADDING TRICK</li>
                    <li>HP DMI TOOL</li>
                    <li>BIOS OS KEY TRICK</li>
                    <li>ONBOARD RAM DISABLE</li>
                    <li>ALL BRAND UNLOCKING COMMON METHOD</li>
                    <li>HP CONSUMER MODEL UNLOCKING</li>
                    <li>HP CORPORATE MODEL UNLOCKING</li>
                    <li>HP G7/G8 SERIES UNLOCKING</li>
                    <li>APPLE UNLOCKING AND SERIAL NUMBER</li>
                    <li>LENOVO THINKPAD UNLOCKING PATCH METHOD</li>
                    <li>LENOVO THINKPAD UNLOCKING DIRECT FLASH METHOD</li>
                    <li>DELL 8FC8 UNLOCKING AND MANY MORE</li>
                  </ol>

                  <h3>BIOS EDITING BASIC TOOLS LIST USED IN THIS COURSE</h3>
                  <ol>
                    <li>HEX EDITOR</li>
                    <li>WINRAR</li>
                    <li>UEFI REPLACER</li>
                    <li>UEFI VIEWER</li>
                    <li>PYTHON</li>
                    <li>DELL BIOS EXTRACTOR</li>
                    <li>LENOVO BIOS EXTRACTOR</li>
                    <li>AMIUCP 1.07</li>
                    <li>HP BIOS DECRYPTER TOOL</li>
                    <li>INSIDE BIOS EXTRACTOR</li>
                    <li>AMI BIOS GUARD EXTRACTOR</li>
                    <li>ME ANALYZER</li>
                    <li>ME SYSTEM TOOL COLLECTION VERSION 6 TO 16</li>
                    <li>ME REPOSITORY PACK COLLECTION VERSION 6 TO 16</li>
                    <li>HXD EDITOR</li>
                  </ol>

                  <p>
                    <strong>Note:</strong> Free Access to LCIIT Bios World
                    Telegram Channel for Laptop Main and EC Bios, ME & TXE
                    Region Repository Pack/System Tools / ME Analyzer / UEFI
                    Tool, Lenovo and Dell BIOS extractor with All BIOS Editing
                    Tools are given to students with this course.
                  </p>
                </div>
              </Modal>
            </Suspense>
          )}
          <MotionCourse
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={onlineChipLevelReparing}
            title="Laptop Chip level Repairing – Online Video Course."
            text="Enroll in our Laptop Chip-Level Repairing Online Video Course and learn hardware repair from anywhere. This beginner-friendly course covers motherboard diagnostics, chip replacement, soldering, and advanced circuit troubleshooting through detailed video lessons. Understand power sequences, identify faults quickly, and repair laptops with precision. Practical demonstrations and real-world examples ensure you gain industry-ready skills. With expert guidance, lifetime access to videos, and certification upon completion, you’ll be fully equipped to step confidently into the laptop hardware repair industry."
            onclick={() =>
              setIsModalOpen((prev) => ({
                ...prev,
                onlineChipLevelReparing: true,
              }))
            }
          />
          {isModalOpen.onlineChipLevelReparing && (
            <Suspense fallback={<SkletonModal />}>
              <Modal
                closeModal={() => closeModal("onlineChipLevelReparing")}
                header="Laptop Chip level Repairing – Online Video Course.."
                footer={
                  <div
                    onClick={() =>
                      setIsModalOpen({
                        advanceReparing: false,
                        fresherReparing: false,
                        biosEditing: false,
                        onlineBiosEditing: false,
                        onlineChipLevelReparing: false,
                      })
                    }
                    className="d-flex justify-content-center align-items-center"
                  >
                    <button className={styles.modalBtn}>Back</button>
                  </div>
                }
              >
                <div className={`${styles.modalBody}`}>
                  <ul>
                    <li>
                      <strong>Course:</strong> Self Learning Online Video Course
                      in Laptop Chip Level Repairing With Future Updates.
                      Included Laptop Bios Editing Course
                    </li>
                    <li>
                      <strong>Course Duration:</strong> Approx. 500 Videos (EXE)
                      for Self-Learning Video Course with Lifetime Updates*
                      <em>
                        (Lifetime Updates as per Terms and Conditions) 1 YEAR
                        VALIDITY
                      </em>
                    </li>
                    <li>
                      <strong>Course Fee:</strong> Rs. 20,000/- (LINK MODE OR
                      HDD MODE)
                      <em>HDD COST EXTRA Rs. 1000/-</em>
                    </li>
                    <li>
                      <strong>Note:</strong> Basic Bios Editing, Graphics
                      Conversion Details, Circuit Explanation by Schematic
                      Diagram (HUB/PCH/SOC ARCHITECTURE – 1ST GENERATION TO 11TH
                      GENERATION), Board View, DSO- Auto Mode & Trigger Mode, DC
                      Supply, IO Programming, BIOS Programming, Me region & TXE
                      region repair, Onboard RAM Disabling, Thinkpad Password
                      Unlocking, BIOS Password Unlocking are completely covered
                      in this course.
                    </li>
                    <li>
                      <strong>Note:</strong> Laptop Repairing Video Course HDD
                      Mode included 256 GB new SSD hard with:
                      <ul>
                        <li>
                          🎯 laptop repairing videos basic to advance level
                        </li>
                        <li>🎯 complete bios editing video</li>
                        <li>🎯 laptop schematic diagram collection</li>
                        <li>🎯 laptop bios dump collection</li>
                        <li>🎯 laptop boardview file collection</li>
                        <li>🎯 bios editing tool collection</li>
                        <li>🎯 graphics conversion data collection</li>
                        <li>🎯 onboard ram disable data collection</li>
                        <li>🎯 CD3301 ic bypassing image collection</li>
                        <li>🎯 password unlocking tool collection</li>
                        <li>🎯 laptop motherboard hd image collection</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Note:</strong> Free Access to LCIIT Bios World
                      Telegram Channel for Laptop Main and EC Bios, ME & TXE
                      Region Repository Pack/System Tools / ME Analyzer / UEFI
                      Tool, Lenovo and Dell bios extractor with All Bios Editing
                      Tools are given to students with this course. Free Access
                      to LCIIT Schematic World (Approx. 10,000 Schematics) +
                      Free Access to LCIIT Board View Telegram Channel. Graphics
                      Conversion Data, Asus Ram Disabling data are given to
                      students with this course.
                    </li>
                    <li>
                      <strong>Note:</strong> Please download all these videos as
                      soon as possible. If you lose them for any reason or
                      whatever happens, we will not be responsible. Re-sending
                      of videos will be chargeable – 25% of Current course fee.
                    </li>
                  </ul>
                </div>
              </Modal>
            </Suspense>
          )}
        </div>
      </section>

      <section id="appCourses" className={`${styles.courses} mt-3`}>
        <div className="container">
          <h2 className="text-center text-uppercase">
            App courses | LCIIT Delhi
          </h2>
          <p className="text-center m-0">
            Learn anywhere, anytime with our comprehensive courses on the LCIIT
            App.
          </p>
        </div>

        <div className="container d-flex justify-content-around mt-2 align-items-center px-5 flex-wrap row-gap-5">
          <MotionCourse
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={dsoBasicSetting}
            title="DSO Oscilloscope Basic Settings Video Course."
            text="Learn the fundamentals of using a DSO Oscilloscope with our Basic Settings Video Course. Perfect for beginners, this course covers waveform observation, voltage and time measurements, trigger settings, and signal analysis through clear, step-by-step video lessons. Gain practical understanding of oscilloscope functions and develop the confidence to operate it efficiently in electronics and hardware troubleshooting. With expert guidance, real-world examples, and lifetime access to videos, you’ll acquire essential skills to measure, analyze, and interpret signals accurately."
            link="https://bmbby.courses.store/215868?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
          <MotionCourse
            initial={{ transform: "scale(0.5)", opacity: 0 }}
            whileInView={{ transform: "scale(1)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={biosEditingApp}
            title="Laptop Bios Editing Course (HINDI)."
            text="Enroll in our Laptop BIOS Editing Course in Hindi through easy-to-follow video lessons. Ideal for beginners, this course teaches BIOS configuration, password removal, firmware updates, and advanced troubleshooting in your native language. Gain practical knowledge with step-by-step demonstrations and real-world examples. Learn to safely modify BIOS settings, recover locked systems, and optimize laptop performance. With expert guidance, lifetime access to videos, and certification upon completion, you’ll confidently handle BIOS-related challenges in the hardware repair industry."
            link="https://bmbby.courses.store/213190?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
          <MotionCourse
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={onBoardRam}
            title="Disable Onboard RAM in Lenovo & Acer Laptops."
            text="Learn how to disable onboard RAM in Lenovo and Acer laptops with our step-by-step video guide. Perfect for beginners and hardware enthusiasts, this tutorial covers BIOS navigation, memory configuration, and safe procedures to modify onboard RAM settings. Understand the impact of disabling RAM on system performance and troubleshooting. With clear demonstrations and practical tips, you’ll gain the confidence to make precise adjustments in laptop hardware settings while ensuring safety and system stability."
            link="https://bmbby.courses.store/235344?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
          <MotionCourse
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={tpmErr}
            title="Dell TPM Error Solution."
            text="Learn to fix Dell TPM (Trusted Platform Module) errors with our step-by-step video guide. Perfect for beginners and IT enthusiasts, this tutorial covers BIOS settings, TPM reset, firmware updates, and troubleshooting techniques to resolve security-related issues. Understand how TPM impacts system encryption, Windows security features, and boot processes. With clear demonstrations and practical tips, you’ll gain the confidence to quickly identify and solve Dell TPM errors, ensuring your laptop runs securely and efficiently."
            link="https://bmbby.courses.store/353745?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
          <MotionCourse
            initial={{ transform: "scale(0.5)", opacity: 0 }}
            whileInView={{ transform: "scale(1)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={dellBiosPassword}
            title="Dell 8FC8 Password Unlocking."
            text="Learn to unlock Dell 8FC8 BIOS passwords with our step-by-step video guide. Designed for beginners and hardware enthusiasts, this tutorial covers identifying the 8FC8 code, safe BIOS reset methods, and practical password removal techniques. Gain hands-on knowledge to recover access to locked Dell laptops without damaging hardware. With clear demonstrations, expert guidance, and real-world examples, you’ll acquire the confidence and skills to efficiently resolve Dell 8FC8 password issues and continue working with laptops securely."
            link="https://bmbby.courses.store/282837?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
          <MotionCourse
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            img={biosPassword}
            title="BIOS Password Unlocking."
            text="Master BIOS Password Unlocking with our comprehensive video guide. Perfect for beginners and IT hardware enthusiasts, this course teaches safe methods to reset or remove passwords on laptops and desktops. Learn step-by-step techniques for different BIOS types, understand security implications, and gain practical skills to regain system access without harming hardware. With expert demonstrations, real-world examples, and clear instructions, you’ll confidently handle BIOS password issues, making you capable of troubleshooting, repairing, and servicing laptops and desktops efficiently."
            link="https://bmbby.courses.store/250839?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
          />
        </div>
      </section>

      <section
        id="onlineCourses"
        className={`${styles.coursesVideos} bg-white mt-3`}
      >
        <div className="container">
          <h2 className="text-center text-uppercase">
            Online video courses | LCIIT Delhi
          </h2>
          <p className="text-center m-0">
            Explore our video tutorials to learn about the comprehensive courses
            and real-world training at LCIIT.
          </p>
        </div>

        <div className="container d-flex justify-content-around mt-2 align-items-center flex-wrap row-gap-5 mt-4">
          <motion.div
            initial={{ transform: "translateX(-50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className={`${styles.iframeResponsive} d-flex justify-content-center ratio ratio-16x9`}
          >
            <iframe
              src="https://www.youtube.com/embed/B0H1DIX4LlE?si=dbUiayvsXdxocZQh"
              title="LCIIT Laptop Reapring Course Complete Details"
              border="none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ transform: "translateX(50%)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className={`${styles.iframeResponsive} d-flex justify-content-center ratio ratio-16x9`}
          >
            <iframe
              src="https://www.youtube.com/embed/v0t1Diq0J6Q?si=o_AU91AY3UtAXZ0_"
              title="LCIIT Institute Tour"
              border="none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Location
          sectionClass={styles.location}
          divClass={styles.iframeResponsive}
        />
      </Suspense>
    </>
  );
};

export default Home;
