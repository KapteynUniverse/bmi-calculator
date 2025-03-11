import recommendations from "../data/recommendations";

type recommendationType = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
};
const Recommendations = () => {
  return (
    <section
      aria-labelledby="recommendations-title"
      className="bmi-recommendations"
    >
      <h2 id="recommendations-title" className="sr-only">
        For a healty life
      </h2>
      {recommendations.map((recommendation: recommendationType) => {
        return (
          <article key={recommendation.id}>
            <div className="bmi-recommendations__title">
              <img
                src={recommendation.imageSrc}
                alt=""
                height={32}
                width={32}
              />
              <h3>{recommendation.title}</h3>
            </div>
            <p>{recommendation.description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Recommendations;
