import { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(54, 164, 215);
`;

function Spinner({spinnerLoading}) {
 
  let [color, setColor] = useState("#ffffff");

  return (
 
     
      <ClipLoader color={color} spinnerLoading={spinnerLoading} css={override} size={50} />
  
  );
}

export default Spinner;