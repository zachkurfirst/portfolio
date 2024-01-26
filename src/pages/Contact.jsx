import { useState, useEffect } from "react";

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
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-24 mb-4">
        Get in Touch
      </h1>
      <h2 className="text-2xl text-slate-900 dark:text-slate-100 mb-6">
        Let's connect!
      </h2>
      {contact && (
        <div className="flex flex-wrap justify-center items-center gap-5 mb-8">
          {contact.map((c, idx) => {
            return (
              //   <div key={idx} className="w-56">
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="w-16"
              >
                <img src={c.image} alt={c.name} />
              </a>
              //   </div>
            );
          })}
        </div>
      )}
      <div id="contact-buttons" className="flex justify-center mb-24">
        <a href="mailto:zachmk11@gmail.com" className="btn-lg btn-primary mr-4">
          Email Me!
        </a>
        <a
          href="https://drive.google.com/file/d/1btmdktgQI6vYYQKe2aAPI2owzihdD0Ng/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lg btn-secondary"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;

//   {/* <div className="flex justify-center">
//     <a href="#projects" className="btn-lg btn-primary mr-4">
//       Projects
//     </a>
//     <a href="#contact" className="btn-lg btn-secondary">
//       Get in touch
//     </a>
//   </div> */}
