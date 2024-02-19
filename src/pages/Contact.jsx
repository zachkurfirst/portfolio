import { useState, useEffect } from "react";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope, faFileLines, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = (props) => {
  const [contact, setContact] = useState([]);

  const getContactData = async () => {
    try {
      const response = await fetch("./contact.json");
      const data = await response.json();
      console.log("data:", data);
      setContact(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log("use effect");
    getContactData();
  }, []);

  return (
    <section id="contact" className="flex flex-col text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-950 dark:text-sky-100 mt-24 mb-4">
      <FontAwesomeIcon icon={faComments} className="mr-2"/>Get in Touch
      </h2>
      <h3 className="text-2xl text-sky-950 dark:text-sky-100 mb-6">
        Let's connect!
      </h3>
      {contact && (
        <div className="flex flex-wrap justify-center items-center gap-5 mb-8">
          {contact.map((c, idx) => {
            return (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="w-16"
              >
                <img src={c.image} alt={c.name} />
              </a>
            );
          })}
        </div>
      )}
      <div id="contact-buttons" className="flex justify-center mb-24">
        <a href="mailto:zachmk11@gmail.com" className="btn sm:btn-lg btn-primary mr-4">
          Email
          <FontAwesomeIcon icon={faPaperPlane} className="ml-2"/>
        </a>
        <a
          href="https://drive.google.com/file/d/1l0w8Zk-aY3DOdd1tUJ2-c590OSaGJ7Fa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn sm:btn-lg btn-secondary"
        >
          Resume
          <FontAwesomeIcon icon={faFileLines} className="ml-2"/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
