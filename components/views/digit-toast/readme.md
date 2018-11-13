# DigitToast

A dialog with a title, description, confirm text and cancel text. You can only open it with a redux call on `DigitToastActions.digitToastOpen`. You must have only one element of DigitToast for it to work properly. Add `DigitToastActions.digitToastOpen` to your mapDispatchToProps.

```jsx
import { DigitToast, DigitToastActions } from "@cthit/react-digit-components";

<DigitProviders>
    <DigitToast />
    <MyComponentConnected />
</DigitProviders>;

class MyComponent extends React.Component {
    render() {
        const { toastOpen } = this.props;
        return (
            <div>
                <DigitButton
                    text="Open toast"
                    onClick={() => {
                        toastOpen({
                            text: "Hej",
                            duration: 2000,
                            actionText: "Undo",
                            actionHandler: () => {
                                console.log("Undo please");
                            }
                        });
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    toastOpen: toastData =>
        dispatch(DigitToastActions.digitToastOpen(toastData))
});

const MyComponentConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyComponent);
```
