import headerImg from "/assets/images/healthy-eating.png";

const Results = () => {
  return (
    <section aria-labelledby="results-title" className="bmi-results">
      <div>
        <img
          className="bmi-results__img"
          src={headerImg}
          alt=""
          width={580}
          height={387}
        />
      </div>
      <div>
        <h2 id="results-title">What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered 'healthy'. Maintaining a
          healthy weight may lower your risk of health problems, such as obesity
          and type 2 diabetes. Aim for a nutritious diet with reduced fat and
          sugar content, incorporating ample fruits and vegetables.
          Additionally, strive for regular physical activity, ideally about 30
          minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default Results;
