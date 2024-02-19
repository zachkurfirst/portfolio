import { useState, useEffect } from "react";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const About = (props) => {
  // create state to hold About data
  const [about, setAbout] = useState(null);

  // function to make API fetch call
  const getAboutData = async () => {
    try {
      // make API call + get response
      const response = await fetch("./about.json");
      // convert response -> JSON
      const data = await response.json();
      console.log("data:", data);
      // set about state to API data
      setAbout(data);
    } catch (err) {
      console.log(err);
    }
  };

  // make initial call for data so it only happens once on component load
  useEffect(() => {
    // console.log("use effect");
    getAboutData();
    // empty dependency array - run once - after initial render
  }, []);

  return (
    <section id="about" className="text-sky-950 dark:text-sky-100">
      {about && (
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8 mt-24">
          <img
            src={about.headshot}
            alt={about.name}
            className="rounded-full object-cover w-1/3 h-1/3 md:self-center lg:self-end md:ml-4"
          />
          <div id="about-text" className="mx-8 sm:mx-0 md:mr-6 lg:mr-0 max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left mb-6 sm:mb-4"><FontAwesomeIcon icon={faAddressCard} className="mr-4"/>About Me</h2>
            <p className="mt-4">{about.bio}</p>
            <p className="mt-4">{about.background}</p>
            <p className="mt-4">{about.wrap}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
