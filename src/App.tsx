import { styled } from "styled-components";
import InputNumbers from "./components/InputNumbers";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [years, setYears] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [days, setDays] = useState<string>("");

  const handleValueChange = (
    newDay: string,
    newMonth: string,
    newYear: string
  ) => {
    setYears(newYear);
    setDays(newDay);
    setMonths(newMonth);
  };

  return (
    <Body>
      <div className="bgDiv">
        <InputNumbers onChange={handleValueChange} />
        <Result years={years} months={months} days={days} />
      </div>
    </Body>
  );
}

export default App;

const Body = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  .bgDiv {
    background-color: white;
    padding: 5rem 2rem;
    border-radius: 2.2rem 2.2rem 10rem 2.2rem;

    @media (min-width: 768px) {
      width: 80rem;
    }
  }
`;
