import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { selectTheme, toggleTheme } from "./theme-slice";

const useTheme = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const handleThemeClick = () => {
        dispatch(toggleTheme());
    }
    
    return { theme, handleThemeClick };
}

export default useTheme;