import React from "react";
import pic from "../assets/robert.jpg";
import edward from "../assets/edward.jpg";
import pawel from "../assets/pawel.jpg";
import mieke from "../assets/mieke.jpg";
import mathieu from "../assets/mathieu.jpg";
import janosch from "../assets/janosch.jpg";
import { useState } from "react";
import HeroSection from "./HeroSection";

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
};

const data1 = {
  title: "Find Out When If It Is Right",
  subTitle: "Throng In The Dessert",
  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, saepe consequatur architecto
            quasi voluptatum odio recusandae ipsum repellendus, nihil, neque eum! Provident, excepturi harum
            beatae iusto aperiam voluptates aspernatur esse maiores, libero qui id itaque nobis praesentium?
            Ullam facere eligendi ducimus sit tenetur accusamus culpa.`,
  image: `${edward}`,
};

const heroSectionData = [
  {
    id: 1,
    title: `Error, quidem amet quibusdam`,
    subTitle: `Kolor sit amet, consectetur distinctio, laboriosam reprehen`,
    desc: `laudantium illo dolorum aspernatur consequuntur? Quam eius quia quaerat distinctio minus? Officia a aut, 
    amet quaerat hic consequatur! Maiores dolores minima deleniti ullam vitae minus ratione quaerat expedita iusto 
    assumenda mollitia, tempora, officiis, non sint veritatis. Inventore, obcaecati facilis accusantium temporibus impedit aspernatur.`,
    image: pawel,
  },
  {
    id: 2,
    title: `Sonsectetur adipisicing elit. Totam recusandae neque corporis`,
    subTitle: `Pisicing elit. Repellat quia accusantium distinctio, laboriosam reprehen`,
    desc: `Met iste veniam corporis quia, quo esse ducimus perspiciatis molestiae earum veritatis alias deserunt 
    consequatur nisi a et neque delectus culpa obcaecati maiores eos? Omnis nulla quaerat hic facilis atque 
    quidem dignissimos quae, sapiente, doloremque consequatur, fugit enim ullam earum odio temporibus blanditiis`,
    image: mieke,
  },
  {
    id: 3,
    title: `ASdem amet quibusdam`,
    subTitle: `Wetetur distinctio, laboriosam reprehen`,
    desc: `Dospernatur consequuntur? Quam eius quia quaerat distinctio minus? Officia a aut, 
    amet quaerat hic consequatur! Maiores dolores minima deleniti ullam vitae minus ratione quaerat expedita iusto 
    assumenda mollitia, tempora, officiis, non sint veritatis. Inventore, obcaecati facilis accusantium temporibus impedit aspernatur.`,
    image: janosch,
  },
  {
    id: 4,
    title: `Totam recusandae neque corporis`,
    subTitle: `Repellat quia accusantium distinctio, laboriosam reprehen`,
    desc: `Esse ducimus perspiciatis molestiae earum veritatis alias deserunt 
    consequatur nisi a et neque delectus culpa obcaecati maiores eos? Omnis nulla quaerat hic facilis atque 
    quidem dignissimos quae, sapiente, doloremque consequatur, fugit enim ullam earum odio temporibus blanditiis`,
    image: mathieu,
  },
];

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
        <h2>{data1.title ? <>{data1.title}</> : null}</h2>
        <p>{data1.subTitle ? <>{data1.subTitle}</> : ""}</p>
        <p>{data1.desc && <>{data1.desc}</>}</p>
      </section>
      {/* showcase image */}
      <section>
        <img
          className="showcase-image"
          src={data1.image || null}
          alt="showcase-image"
          key={data1.image}
        />
      </section>
    </header>
  );
};

export const Showcase = () => {
  const [view, setView] = useState("primary");

  return (
    <main>
      <HeroSection contentList={heroSectionData} />
      <nav className="view-state">
        <div className="view-state-1">
          <h4 onClick={() => setView("primary")}>Primary</h4>
        </div>
        <div className="view-state-1">
          <h4 onClick={() => setView("secondary")}>Secondary</h4>
        </div>
      </nav>
      <nav>
        {view === "primary" ? <ShowcasePrimary /> : <ShowcaseSecondary />}
      </nav>
    </main>
  );
};
