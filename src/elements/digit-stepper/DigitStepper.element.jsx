import React from "react";
import PropTypes from "prop-types";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { Column } from "../../styles/digit-layout/DigitLayout.styles";

const DigitStepper = ({ activeStep, steps }) => (
    <Column>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(stepData => {
                return (
                    <Step key={stepData.text}>
                        <StepLabel>{stepData.text}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    </Column>
);

DigitStepper.defaultProps = {
    steps: [],
    activeStep: 0
};

DigitStepper.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    activeStep: PropTypes.number.isRequired
};

export default DigitStepper;
