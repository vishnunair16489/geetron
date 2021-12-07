
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyANBQ8CxkifX3MDFZ_5i3XtXjYvklm1DOU"
  })


  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat:  24.936991, lng:  55.044685 }}
        zoom={16}
      
      
      >
    
  
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)