import { motion } from 'motion/react';

const Location = ({sectionClass, divClass}) => {
  return (
    <section className={sectionClass}>
      <div className="container">
        <h2 className="text-center text-uppercase">Location</h2>
        <p className="text-center m-0">
          Find us at our easily accessible campus and explore the facilities we
          offer at LCIIT.
        </p>
      </div>

      <div className="container d-flex justify-content-around mt-2 align-items-center flex-wrap row-gap-5 mt-4 px-5">
        <motion.div
          initial={{ transform: "scale(0.5)", opacity: 0 }}
          whileInView={{ transform: "scale(1)", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={`${divClass} d-flex justify-content-center ratio ratio-16x9`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.62304927813!2d77.17746907475316!3d28.671003382333886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0348bab1565b%3A0x2f2b565f21659f03!2sLCIIT!5e0!3m2!1sen!2sin!4v1755280834420!5m2!1sen!2sin"
            title="LCIIT Campus Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
