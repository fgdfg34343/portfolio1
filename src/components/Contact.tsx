import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const year = new Date().getFullYear();

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:harut6740@gmail.com" data-cursor="disable">
                harut6740@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+79777349128" data-cursor="disable">
                +7 977 734 9128
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/fgdfg34343"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/harut-dev/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://t.me/AutoParts_777"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Telegram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Mariki Khachatryan</span>
            </h2>
            <h5>
              <MdCopyright /> {year}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
