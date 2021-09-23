import { useState, useEffect } from "react";
import Content from "./components/Content";
import Copied from "./components/Copied";
import BrandsData from "./brands.json";
import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./style.scss";
import Collection from "./components/Collection";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  const [copiedAnim, setCopiedAnim] = useState(true);

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  },[copied]);

  useEffect(() => {
    if(copied){
    
      const timeoutP = setTimeout(() => {
        setCopiedAnim(true);
      },100);

      const timeoutPp = setTimeout(() => {
        setCopiedAnim(false);
        
      }, 3900);

      return () => {
        clearTimeout(timeoutPp);
        
        
      
      };
    }
  });

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);

  const data = {
    brands,
    setSelectedBrands,
    selectedBrands,
    setCopied,
    copied,
    setBrands,
    search,
    setSearch,
    copiedAnim,
  };

  return (
    <div className="container">
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Content/>
            </Route>

            <Route path="/collection/:slugs">
              <Collection/>
            </Route>
          </Switch>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
