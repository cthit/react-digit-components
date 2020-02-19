import useGammaIs from "./use-gamma-is";

function useGammaIsAdmin() {
    const admin = useGammaIs("admin");
    return admin;
}

export default useGammaIsAdmin;
