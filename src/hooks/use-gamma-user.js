import { useSelector } from "react-redux";

function useGammaUser() {
    const gammaUser = useSelector(state => state.gammaUser);
    return [gammaUser.user, gammaUser.loading, gammaUser.error];
}

export default useGammaUser;
