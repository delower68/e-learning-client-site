import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div id="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
