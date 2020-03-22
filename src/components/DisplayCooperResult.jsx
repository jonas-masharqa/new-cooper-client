import React from "react";

import coopercalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = coopercalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <p id="cooper-message">
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {result}</p>
          {authenticated && !entrySaved ? (
            <button
              id="save-result"
              onClick={() => saveData(result, entryHandler)}
            >
              Save entry
            </button>
          ) : (
            authenticated ? (
              <p id="response-message">Your entry was saved</p>
            ) : (
              <p>Please sign in if you wish to save your entries.</p>
            )
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;
