# DigitDialog

A dialog with a title, description, confirm text and cancel text. You can only open it with a redux call on `DigitDialogActions.digitDialogOpen`. You must have only one element of DigitDialog for it to work properly. Add `DigitDialogActions.digitDialogOpen` to your mapDispatchToProps.

```jsx
import { DigitDialog, DigitDialogActions } from "@cthit/react-digit-components";

<DigitProviders>
    <DigitDialog />
    <MyComponentConnected />
</DigitProviders>;

class MyComponent extends React.Component {
    render() {
        const { dialogOpen } = this.props;
        return (
            <div>
                <DigitButton
                    text="Open dialog"
                    onClick={() => {
                        dialogOpen({
                            title: "This is a title",
                            description: "Description",
                            cancelButtonText: "No",
                            confirmButtonText: "Yes"
                        });
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    dialogOpen: dialogData =>
        dispatch(DigitDialogActions.digitDialogOpen(dialogData))
});

const MyComponentConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyComponent);
```
