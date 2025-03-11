import logo from "/assets/images/icons/bmi.png";

const TopSection = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" height={32} width={32} />
      </div>
      <div className="bmi-calculator__text">
        <h1>Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the only factor in a
          healthy lifestyle, it can tell you a lot about your overall health and
          well-being.
        </p>
      </div>
    </>
  );
};

export default TopSection;
