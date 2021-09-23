import { useContext,useRef,useEffect } from "react";
import MainContext from "./MainContext";
import { getContrastYIQ } from "./TextContrast";
import ClipboardButton from "react-clipboard.js";
import { BsCheck } from "react-icons/bs";


function Brand({ brand,style,index }) {


  
  const { setSelectedBrands, selectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div style={style}>
    <div 
    
      className={`brand  ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <div
        onClick={toggleSelected}
        className={`checkIcon center ${
          selectedBrands.includes(brand.slug) ? "selected" : ""
        }`}
      >
        <BsCheck />
      </div>
      <h4>{brand.title}</h4>

      <div className="brandColors">
        
        {brand.colors.map((color) => (
     
     
          <ClipboardButton
            data-clipboard-text={color}
            onClick={() => setColor(color)}
            className="colors"
            component="span"
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            <p>#{color}</p>
          </ClipboardButton>
          
        ))}
        
      </div>
    </div>
    </div>
  );
}

export default Brand;

