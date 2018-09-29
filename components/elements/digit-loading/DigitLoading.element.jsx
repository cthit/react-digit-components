import React from "react";
import DigitIfElseRendering from "../../declaratives/digit-if-else-rendering";
import { CircularProgress } from "@material-ui/core";

const DigitLoading = ({ loading, size }) => (
  <DigitIfElseRendering
    test={loading}
    ifRender={() => <CircularProgress size={size} />}
  />
);

export default DigitLoading;
