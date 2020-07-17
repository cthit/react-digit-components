import makeStyles from "@material-ui/styles/makeStyles";

const useLayoutMaterialUi = makeStyles({
    root: ({
        flex,
        alignSelf,
        justifySelf,
        size = {},
        padding = "",
        margin = "4px",
        gridColumn = {},
        gridRow = {}
    }) => ({
        flex: flex || "0 1 auto",
        alignSelf: alignSelf || "auto",
        justifySelf: justifySelf || "auto",
        width: size.width || "auto",
        height: size.height || "auto",
        maxWidth: size.maxWidth || "none",
        maxHeight: size.maxHeight || "none",
        minWidth: size.minWidth || 0,
        minHeight: size.minHeight || 0,
        padding:
            (typeof padding === "string"
                ? padding
                : (padding.top || "0px") +
                  " " +
                  (padding.right || "0px") +
                  " " +
                  (padding.bottom || "0px") +
                  " " +
                  (padding.left || "0px")) + " !important",
        margin:
            (typeof margin === "string"
                ? margin
                : (margin.top || "0px") +
                  " " +
                  (margin.right || "0px") +
                  " " +
                  (margin.bottom || "0px") +
                  " " +
                  (margin.left || "0px")) + " !important",
        gridColumnStart: gridColumn.start,
        gridColumnEnd: gridColumn.end,
        gridRowStart: gridRow.start,
        gridRowEnd: gridRow.end
    })
});

export default useLayoutMaterialUi;
