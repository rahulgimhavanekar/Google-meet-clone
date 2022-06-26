import MainScreen from "./components/MainScreen/MainScreen";
import Participants from "./components/Participants/Participants";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <MainScreen>
      <Participants />
      <Footer />
    </MainScreen>
  );
}

export default App;
