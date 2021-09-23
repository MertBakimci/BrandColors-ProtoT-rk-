import React from "react"
import ContentLoader from "react-content-loader"

function Loader (){
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="63" y="66" rx="10" ry="10" width="73" height="29" /> 
    <rect x="6" y="2" rx="16" ry="16" width="42" height="139" /> 
    <rect x="141" y="66" rx="10" ry="10" width="73" height="29" /> 
    <rect x="220" y="66" rx="10" ry="10" width="73" height="29" /> 
    <rect x="64" y="12" rx="10" ry="10" width="185" height="20" />
  </ContentLoader>
}

export default Loader;

