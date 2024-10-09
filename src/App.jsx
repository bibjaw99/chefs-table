import { Banner } from "./Components/Banner/Banner";
import { Header } from "./Components/Header/Header";
import { Recipes } from "./Components/Recipes/Recipes";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;
