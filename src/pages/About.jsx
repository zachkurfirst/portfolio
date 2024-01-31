import { useState, useEffect } from "react";

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
    <section id="about" className="text-slate-900 dark:text-slate-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-24 mb-6 sm:mb-4">About Me</h1>
      {about && (
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src={about.headshot}
            alt={about.name}
            className="rounded-full max-w-xs sm:max-w-sm"
          />
          <div className="">
            <p className="max-w-lg mt-4 mx-8 sm:mx-4">{about.bio}</p>
            <p className="max-w-lg mt-4 mx-8 sm:mx-4">{about.background}</p>
            <p className="max-w-lg mt-4 mx-8 sm:mx-4">{about.wrap}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
