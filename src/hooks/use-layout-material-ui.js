import makeStyles from "@material-ui/styles/makeStyles";

const useLayoutMaterialUi = makeStyles({
    root: ({ flex, alignSelf, size = {} }) => ({
        flex: flex || "0 1 auto",
        alignSelf: alignSelf || "auto",
        width: size.width || "auto",
        height: size.height || "auto",
        maxWidth: size.maxWidth || "none",
        maxHeight: size.maxHeight || "none",
        minWidth: size.minWidth || 0,
        minHeight: size.minHeight || 0
    })
});

export default useLayoutMaterialUi;
