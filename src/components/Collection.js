import { useContext, useEffect } from 'react';
import {Link, useParams, useHistory,Redirect} from 'react-router-dom'
import Brand from './Brand';
import MainContext from './MainContext';
import Search from './Search';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import {BiLeftArrowAlt} from 'react-icons/bi';

function Collection() {

  useEffect(() => {
      
        setSelectedBrands(slugs.split(','))
       
    },[])
    
    const clearBrands = () => {
        setSelectedBrands([])
        history.push('/')
        

    }

    const {brands, selectedBrands,setSelectedBrands} = useContext(MainContext);
   const {slugs} = useParams()
    const history = useHistory()    
  

   
   

    return (
        <main className="content">
        <header className="header center relative">
            <div  className="goBack clickable">
            <Link className="center" to="/" onClick={clearBrands}>
                <BiLeftArrowAlt size={20}/>
                <p>Go Back</p>
            </Link>
            </div>
           
            <div className={`download center ${selectedBrands.length > 0 ? "opacity " : ""}`}>
            <Download/>
            </div>
        </header>
        <section className="brands">
            {selectedBrands.map(slug => {
                let brand =brands.find(brand => brand.slug === slug)
                return (
                    <LazyLoad key={brand.slug} once={true} overflow={true}>
                    <Brand brand={brand} />
                    </LazyLoad>
                )
                
                })}
        </section>
    </main>
    )
}

export default Collection;