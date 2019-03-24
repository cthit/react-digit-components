import React from "react";
import PropTypes from "prop-types";
import { Hide } from "../../styles/digit-layout/DigitLayout.styles";

const DigitComponentSelector = ({
    activeComponent = 0,
    components = [_A],
    keepAllMounted
}) => {
    return keepAllMounted ? (
        <_DigitComponentSelectorMounted
            activeComponent={activeComponent}
            components={components}
        />
    ) : (
        <_DigitComponentSelectorUnmounted
            activeComponent={activeComponent}
            components={components}
        />
    );
};

const _DigitComponentSelectorMounted = ({ activeComponent, components }) => {
    return components.map((component, index) => (
        <Hide hidden={index != activeComponent} key={index}>
            {React.createElement(component, {})}
        </Hide>
    ));
};

const _DigitComponentSelectorUnmounted = ({ activeComponent, components }) => {
    return React.createElement(components[activeComponent], {});
};

const _A = () => <div>No components</div>;

DigitComponentSelector.propTypes = {
    activeComponent: PropTypes.number.isRequired,
    components: PropTypes.arrayOf(PropTypes.func).isRequired,
    keepAllMounted: PropTypes.bool
};

export default DigitComponentSelector;
