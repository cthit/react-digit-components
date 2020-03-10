import makeStyles from "@material-ui/styles/makeStyles";

const useFormControlStyles = makeStyles({
    root: ({ padding = "0", margin = "4px" }) => ({
        padding: padding + " !important",
        margin: margin + " !important"
    })
});

export default useFormControlStyles;
