import limitations from "../data/limitations";

type limitationType = {
  id: number;
  imageSrc: string;
  title: string;
  text: string;
};

const Limitations = () => {
  return (
    <section aria-labelledby="limitations-title" className="bmi-limitations">
      <div>
        <h2 id="limitations-title">Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="bmi-limitations__card">
        {limitations.map((limitation: limitationType) => {
          return (
            <article key={limitation.id}>
              <div className="bmi-limitations__text">
                <img src={limitation.imageSrc} alt="" height={16} width={16} />
                <h3>{limitation.title}</h3>
              </div>
              <p>{limitation.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Limitations;
