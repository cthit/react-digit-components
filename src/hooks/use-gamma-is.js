import find from "lodash/find";
import useGammaUser from "./use-gamma-user";

function useGammaIs(authority) {
    const user = useGammaUser();

    if (user == null) {
        return false;
    }

    const adminAuthority = find(user.authorities, { authority });

    return adminAuthority != null;
}

export default useGammaIs;
