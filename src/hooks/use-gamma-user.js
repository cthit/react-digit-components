import { useContext } from "react";
import DigitGammaContext from "../contexts/DigitGammaContext";

function useGammaUser() {
    const [{ user }] = useContext(DigitGammaContext);
    return user;
}

export default useGammaUser;
