import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div style={theme === "light" ? lightTheme : darkTheme}>
      <Header changeTheme={changeTheme} />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
