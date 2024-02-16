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
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src={about.headshot}
            alt={about.name}
            className="rounded-full max-w-xs sm:max-w-sm max-h-48 md:max-h-80 max-[927px]:mt-24 min-[928px]:mt-36 ml-4"
          />
          <div id="about-text" className="ml-6 mr-4 sm:mr-6 sm:max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-[927px]:text-center min-[928px]:mt-24 mb-6 sm:mb-4"><FontAwesomeIcon icon={faAddressCard} className="mr-4"/>About Me</h2>
            <p className="md:max-w-lg mt-4">{about.bio}</p>
            <p className="md:max-w-lg mt-4">{about.background}</p>
            <p className="md:max-w-lg mt-4">{about.wrap}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
