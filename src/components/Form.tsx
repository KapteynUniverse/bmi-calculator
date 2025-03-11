import { useState, useContext } from "react";
import { BmiContext } from "../context/BmiContext";

const Form = () => {
  const { setResult, setIdealWeightRange, setModalOpen } =
    useContext(BmiContext)!;
  const [values, setValues] = useState<{
    height: number | string;
    weight: number | string;
  }>({
    height: "",
    weight: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: parseFloat(value) || 0,
    }));
  }

  function getFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const system = formData.get("system") as "metric" | "imperial" | null;
    const height = parseFloat(formData.get("height") as string);
    const weight = parseFloat(formData.get("weight") as string);

    if (!system || isNaN(height) || isNaN(weight)) {
      console.error("Invalid input values.");
      return;
    }
    const result = calculateBmi(weight, height, system);
    const idealRange = calculateIdealWeight(height, system);
    setIdealWeightRange(idealRange);
    setResult(result);
    setModalOpen(true);
    setValues({ height: "", weight: "" });
  }

  function calculateBmi(
    weight: number,
    height: number,
    system: "metric" | "imperial"
  ) {
    if (system === "metric") {
      return Math.round(weight / (height / 100) ** 2);
    } else {
      return Math.round((weight * 703) / height ** 2);
    }
  }

  function calculateIdealWeight(height: number, system: "metric" | "imperial") {
    if (system === "metric") {
      return {
        min: Math.round((18.5 * height ** 2) / 10000),
        max: Math.round((24.9 * height ** 2) / 10000),
        unit: "kg",
      };
    } else {
      return {
        min: Math.round((18.5 * height ** 2) / 703),
        max: Math.round((24.9 * height ** 2) / 703),
        unit: "lbs",
      };
    }
  }

  return (
    <form onSubmit={getFormData} className="bmi-calculator__form">
      <fieldset>
        <legend>Choose a system</legend>
        <label htmlFor="metric">Metric</label>
        <input
          type="radio"
          name="system"
          id="metric"
          value="metric"
          defaultChecked
        />

        <input type="radio" name="system" id="imperial" value="imperial" />
        <label htmlFor="imperial">Imperial</label>
      </fieldset>

      <fieldset>
        <legend>Enter your details below</legend>
        <label htmlFor="height">Height (cm or in)</label>
        <input
          type="number"
          id="height"
          name="height"
          onChange={handleChange}
          value={values.height}
          onClick={(e) => e.currentTarget.select()}
          required
        />

        <label htmlFor="weight">Weight (kg or lbs)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={handleChange}
          value={values.weight}
          onClick={(e) => e.currentTarget.select()}
          required
        />
        <button type="submit">Submit for your results</button>
      </fieldset>
    </form>
  );
};

export default Form;
