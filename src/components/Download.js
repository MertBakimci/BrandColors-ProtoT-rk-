import { useContext, useState,useEffect } from "react";
import MainContext from "./MainContext";
import { BsDownload, BsLink45Deg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


function Download() {

    const {brands,selectedBrands,setSelectedBrands} = useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState();
    const [downloadMethod, setDownloadMethod] = useState('css');

    useEffect(() => {
        if(selectedBrands.length >0 ) {
            let output = ''
           switch (downloadMethod) {
                
               case 'css':
                   output += ':root\n{\n'
                selectedBrands.map(slug => { 
                    
                    let brand= brands.find(brand => brand.slug === slug)
                    output += `/*${brand.slug}*/\n`
                    brand.colors.map((color,key) => {
                       
                        output += `--brand-${slug}-${key}: #${color};\n`
                    })
                })
                output += '}'
               break;

               case 'scss':
                selectedBrands.map(slug => {
                    let brand= brands.find(brand => brand.slug === slug)
                    output += `/*${brand.slug}*/\n`
                    brand.colors.map((color,key) => {
                        output += `\$brand-${slug}-${key}: #${color};\n`
                    })
                })
               break;

               case 'less':
                selectedBrands.map(slug => {
                    let brand= brands.find(brand => brand.slug === slug)
                    output += `/*${brand.slug}*/\n`
                    brand.colors.map((color,key) => {
                        output += `@brand-${slug}-${key}: #${color};\n`
                    })
                })
               break;
           }
           
            const blob = new Blob ([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    }, [selectedBrands, downloadMethod])
    
  


  
  return (
    <>
      <a download={`colors.${downloadMethod}`} href={downloadUrl} className={`clickable ${selectedBrands.length > 0 ? "" : "disabled"}`}>
        <BsDownload size={20} />
      </a>
      <select onChange={(e) => setDownloadMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
      </select>
      <Link to={`/collection/${selectedBrands.join(',')}`} className={`clickable ${selectedBrands.length > 0 ? "" : "disabled"}`}>
        <BsLink45Deg size={22} />
      </Link>

      <a
        className={`clickable ${selectedBrands.length > 0 ? "" : "disabled"}`}
        onClick={() => setSelectedBrands([])}
      >
        <IoClose size={22} />
      </a>
      <p
        className={`clickable ${selectedBrands.length > 0 ? "" : "disabled"}`}
        onClick={() => setSelectedBrands([])}
      >
        {selectedBrands.length} Selected
      </p>
    </>
  );
}

export default Download;
