import React from "react";
import { DigitStepper, DigitButton } from "../../components";
import {
    Column,
    Size,
    Center
} from "../../components/styles/digit-layout/DigitLayout.styles";
import DigitComponentSelector from "../../components/declaratives/digit-component-selector";

class StoryDigitStepper extends React.Component {
    state = {
        activeStep: 0
    };

    render() {
        const { activeStep } = this.state;

        return (
            <Column>
                <DigitStepper
                    activeStep={activeStep}
                    steps={[
                        {
                            text: "First step of this stepper"
                        },
                        {
                            text: "The second of the cool cooler stepper"
                        },
                        {
                            text: "Whaaaaaaat"
                        },
                        {
                            text: "Almost finished"
                        },
                        {
                            text: "Finished"
                        }
                    ]}
                />
                <DigitComponentSelector
                    activeComponent={activeStep}
                    components={[
                        TestComponent1,
                        TestComponent2,
                        TestComponent3,
                        TestComponent4,
                        TestComponent5,
                        TestComponent6
                    ]}
                />
                <Center>
                    <DigitButton
                        primary
                        raised
                        text="Nästa"
                        onClick={() => {
                            this.setState({
                                activeStep: (activeStep + 1) % 6
                            });
                        }}
                    />
                </Center>
            </Column>
        );
    }
}

const TestComponent1 = ({}) => <div>Hej what</div>;
const TestComponent2 = ({}) => <div>Hej what what</div>;
const TestComponent3 = ({}) => <div>Hej what what what</div>;
const TestComponent4 = ({}) => <div>Hej what what what what</div>;
const TestComponent5 = ({}) => <div>Hej what what what what what</div>;
const TestComponent6 = ({}) => <div>finished</div>;

export default StoryDigitStepper;
