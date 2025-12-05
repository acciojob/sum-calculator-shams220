import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);

 useEffect(() => {
    // setSum((prev) => prev + Number(value));
    // or
    setSum(Number(sum)+ Number(value));

  }, [value]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
