
import { useContext } from 'react';
import MainContext from './MainContext';
import {getContrastYIQ} from './TextContrast';



function Copied({ color }) {

	const {copiedAnim} = useContext(MainContext);
	return (

		<div className={`copied ${
			copiedAnim === true ? "in":"out"
		  }`} style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
			Copied #{color}  to Clipboard
			
		</div>
	)
}

export default Copied;