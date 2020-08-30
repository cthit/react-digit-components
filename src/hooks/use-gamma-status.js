import { useContext } from "react";
import DigitGammaContext from "../contexts/DigitGammaContext";

function useGammaStatus() {
    const [{ loading, error }] = useContext(DigitGammaContext);

    return [loading, error];
}

export default useGammaStatus;
