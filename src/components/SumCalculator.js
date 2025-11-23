import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);

 useEffect(() => {
    setSum((prev) => prev + Number(value));
  }, [value]);

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />
      <h2>Total Sum: {sum}</h2>
    </div>
  );
};

export default SumCalculator;
