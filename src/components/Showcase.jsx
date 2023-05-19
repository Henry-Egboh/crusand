import pic from "../assets/robert.jpg";


const data = {
    title: 'Pitches in Garden',
    subTitle: 'Where joy comes alive',
    desc: `In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.
            In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.
            In the verge of wonderful,  it's good we let you see but do you know
            how we can do this if not consistently. Exactly what i am talking about just improve on it.`,
    image: `${pic}`,
}

export const Showcase = () => {


  return (
    <header className="showcase">
        <section>
        <img className="showcase-image" src={data.image || null} alt="showcase-image" key={data.image} />
        </section>
        <section className="showcase-text">
            <h2>
                {data.title ? (<>{data.title}</>) : null}
            </h2>
            <p>{data.subTitle ? (<>{data.subTitle}</>) : ""}</p>
            <p>{data.desc && (<>{data.desc}</>)}</p>
        </section>
    </header>
  )
}
