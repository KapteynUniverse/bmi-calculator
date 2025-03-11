import { createContext, useState, ReactNode } from "react";

type IdealWeightRange = {
  min: number;
  max: number;
  unit: string;
};
type BmiContextType = {
  result: number | null;
  setResult: (value: number) => void;
  idealWeight: IdealWeightRange | null;
  setIdealWeightRange: (value: IdealWeightRange) => void;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

export const BmiContext = createContext<BmiContextType | undefined>(undefined);

export const BmiProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<number | null>(null);
  const [idealWeight, setIdealWeightRange] = useState<IdealWeightRange | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <BmiContext.Provider
      value={{
        result,
        setResult,
        idealWeight,
        setIdealWeightRange,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
};
