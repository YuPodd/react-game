import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import{ lightTheme, darkTheme } from "./components/Themes"

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
   <> 
      <Header changeTheme={changeTheme} />
      <div style={theme === 'light' ? lightTheme : darkTheme}>
      <Main />
      </div>
      <Footer />
    </>
  );
}
export default App;
