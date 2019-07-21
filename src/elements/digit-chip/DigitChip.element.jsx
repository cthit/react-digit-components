import React from "react";
import { Chip } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

const DigitChip = ({
    avatar,
    label,
    primary,
    secondary,
    outlined,
    onDelete,
    deleteIcon
}) => (
    <Chip
        deleteIcon={deleteIcon}
        onDelete={onDelete}
        avatar={avatar}
        label={label}
        variant={outlined ? "outlined" : "default"}
        color={primary ? "primary" : secondary ? "secondary" : "default"}
    />
);

DigitChip.defaultProps = {
    deleteIcon: <Close />
};

export default DigitChip;
