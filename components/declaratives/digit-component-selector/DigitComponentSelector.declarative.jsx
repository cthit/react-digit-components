import React from "react";
import PropTypes from "prop-types";

const DigitComponentSelector = ({
    activeComponent,
    components,
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
    return components.map((component, index) =>
        index === activeComponent ? (
            React.createElement(component, {})
        ) : (
            <Hide hidden>{React.createElement(component, {})}</Hide>
        )
    );
};
const _DigitComponentSelectorUnmounted = ({ activeComponent, components }) => {
    return React.createElement(components[activeComponent], {});
};

DigitComponentSelector.propTypes = {
    activeComponent: PropTypes.number.isRequired,
    components: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default DigitComponentSelector;
