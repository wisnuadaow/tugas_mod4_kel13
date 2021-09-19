import { useContext, createContext, useState } from "react";
import "./Context1.css";
const themes = {
  light: {
    text: "rgb(97, 218, 251)",
    background: "#DEE4E7",
  },
  dark: {
    text: "#DEE4E7",
    background: "rgb(40, 44, 52)",
  },
};

const ThemeContext = createContext();

export default function Context() {
  const [valueTheme, setValueTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
                style={{
                  background: valueTheme.background,
                  width: "100%",
                  maxWidth: "100%",
                  overflowX: "hidden",
                  position: "relative",
                  overflowY: "hidden",
                  height: "auto",
                  maxHeight: "100%",
                }}
        // tinggal uncoment
        // cara 1
        
        // cara 2
        // className={`contentWrapper ${
        //   valueTheme === themes.light ? "dark" : "light"
        // }`}
      >
        <Content tema={valueTheme} />
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          change
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      // tinggal uncomment aja
      // cara 1
      className="titleContext"
      style={{ color: theme.text }}
      // cara 2
      // className={`titleContext ${theme === themes.light ? "dark" : "light"}`}
    >

    </p>
  );
}
