import PropTypes from "prop-types";

const DigitRenderSelector = ({ activeRender, renders }) => {
    return renders[activeRender]();
};

DigitRenderSelector.defaultProps = {
    activeRender: 0,
    renders: [() => null]
};

DigitRenderSelector.propTypes = {
    activeRender: PropTypes.number.isRequired,
    renders: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default DigitRenderSelector;
