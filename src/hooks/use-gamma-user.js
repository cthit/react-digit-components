import { useContext } from "react";
import DigitGammaContext from "../contexts/DigitGammaContext";

function useGammaUser() {
    const gammaContext = useContext(DigitGammaContext);
    return [gammaContext.user, gammaContext.loading, gammaContext.error];
}

export default useGammaUser;
