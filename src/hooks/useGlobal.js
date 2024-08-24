import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
    const {
        mobileView
    } = useContext(GlobalContext)

    return {
        mobileView
    };
}

