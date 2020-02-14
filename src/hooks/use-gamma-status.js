import { useContext } from "react";
import DigitGammaContext from "../contexts/DigitGammaContext";

function useGammaStatus() {
    const [value] = useContext(DigitGammaContext);
    return [value.loading, value.error];
}

export default useGammaStatus;
