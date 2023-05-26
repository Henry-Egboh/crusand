import pic from "../assets/robert.jpg";
import edward from "../assets/edward.jpg";
import { useState } from "react";

//  data object
const data = {
  title: "Pitches in Garden",
  subTitle: "Where joy comes alive",
  desc: `In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.
            In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.
            In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.`,
  image: `${pic}`,
  image1: `${edward}`,
};


// primary showcase content
const ShowcasePrimary = () => {
  return (
    <header className="showcase">
      <section>
        <img
          className="showcase-image"
          src={data.image || null}
          alt="showcase-image"
          key={data.image}
        />
      </section>
      <section className="showcase-text">
        <h2>{data.title ? <>{data.title}</> : null}</h2>
        <p>{data.subTitle ? <>{data.subTitle}</> : ""}</p>
        <p>{data.desc && <>{data.desc}</>}</p>
      </section>
    </header>
  );
};

// secondary showcase content

const ShowcaseSecondary = () => {
  return (
    <header className="showcase">
      {/* showcase text */}
      <section className="showcase-text">
        <h2>{data.title ? <>{data.title}</> : null}</h2>
        <p>{data.subTitle ? <>{data.subTitle}</> : ""}</p>
        <p>{data.desc && <>{data.desc}</>}</p>
      </section>
      {/* showcase image */}
      <section>
        <img
          className="showcase-image"
          src={data.image1 || null}
          alt="showcase-image"
          key={data.image1}
        />
      </section>
    </header>
  );
};

export const Showcase = () => {
  const [view, setView] = useState("primary");

  return (
    <main>
      <nav className="view-state">
        <h4 onClick={() => setView("primary")}>Primary</h4>
        <h4 onClick={() => setView("secondary")}>Secondary</h4>
      </nav>
      <nav>
        {view === "primary" ? <ShowcasePrimary /> : <ShowcaseSecondary />}
      </nav>
    </main>
  );
};
