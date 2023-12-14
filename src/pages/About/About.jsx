import { useState, useEffect } from "react";
import "./About.css";

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
      // console.log("data:", data);
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

  // const loaded = () => (
  //   <div>
  //     <img src={about.headshot} alt={about.name} />
  //     <h2>{about.name}</h2>
  //     <h3>{about.email}</h3>
  //     <p>{about.bio}</p>
  //   </div>
  // );

  // return about ? loaded() : <p>Loading...</p>;

  return (
    <section id="about">
      {about && (
        <div className="About">
          <img src={about.headshot} alt={about.name} />
          <h2>{about.name}</h2>
          <h3>{about.email}</h3>
          <p>{about.bio}</p>
        </div>
      )}
    </section>
  );
};

export default About;
