import Form from "../components/Form";
import Recommendations from "../components/Recommendations";
import Limitations from "../components/Limitations";
import Results from "../components/Results";
import TopSection from "../components/TopSection";
import Modal from "../components/Modal";
import { BmiContext } from "../context/BmiContext";
import { useContext } from "react";

const Main = () => {
  const { isModalOpen } = useContext(BmiContext)!;
  return (
    <main>
      <section aria-label="Calculate your BMI Index" className="bmi-calculator">
        <TopSection />
        <Form />
        {isModalOpen && <Modal />}
      </section>
      <Results />
      <Recommendations />
      <Limitations />
    </main>
  );
};

export default Main;
