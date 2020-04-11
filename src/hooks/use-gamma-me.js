import { useContext } from "react";
import DigitGammaContext from "../contexts/DigitGammaContext";

function useGammaMe() {
    const [{ me }] = useContext(DigitGammaContext);

    return me;
}

export default useGammaMe;
