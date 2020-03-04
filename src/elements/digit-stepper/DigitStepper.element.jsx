import React from "react";
import PropTypes from "prop-types";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import useLayoutMaterialUi from "../../hooks/use-layout-material-ui";

const DigitStepper = ({ activeStep, steps, flex, alignSelf, size }) => {
    const classes = useLayoutMaterialUi({ flex, alignSelf, size });

    return (
        <Stepper classes={classes} activeStep={activeStep} alternativeLabel>
            {steps.map(stepData => {
                return (
                    <Step key={stepData.text}>
                        <StepLabel>{stepData.text}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
};

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
