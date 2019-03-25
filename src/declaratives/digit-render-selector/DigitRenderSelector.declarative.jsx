import PropTypes from "prop-types";

const DigitRenderSelector = ({ activeRender, renders }) => {
    return renders[activeRender]();
};

DigitRenderSelector.defaultProps = {
    activeRender: 0,
    renders: [() => null]
};

DigitRenderSelector.propTypes = {
    /** The index of the renders array that should be rendered */
    activeRender: PropTypes.number.isRequired,
    /** An array of renders */
    renders: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default DigitRenderSelector;
