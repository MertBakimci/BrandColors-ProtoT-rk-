import Search from "./Search";
import Brand, {heightt} from "./Brand";
import MainContext from "./MainContext";
import { useContext, useEffect,useRef } from "react";
import Download from "./Download";
import { List, AutoSizer } from "react-virtualized";
import LazyLoad from "react-lazyload";
import Loader from "./Loading";


function Content() {

  
  const { brands, selectedBrands } = useContext(MainContext);

    const rowRenderer = ({key, index,style  }) => {
        return (
            <Brand  style={style} brand={brands[index]} key={key}/>
        )
    }
 
  return (
    <main  className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
       <LazyLoad once offset={100} >
         
       {brands.map(brand => (
                    <Brand brand={brand} />
    ))}
       </LazyLoad>




    
      </section>
    </main>
  );
}

export default Content;
