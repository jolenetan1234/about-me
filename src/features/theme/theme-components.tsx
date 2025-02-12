import useTheme from "./theme-hooks";

const ThemeToggleButton = ({ className }: { className: string }) => {
  const { theme, handleThemeClick } = useTheme();
  return (
    <button className={`${className}`} onClick={handleThemeClick}>
      BUTTON
    </button>
  );
};

export { ThemeToggleButton };
