import React from "react";
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 37.350429, lng: 127.111691 }}
    >
      <Marker
        position={{ lat: 37.350429, lng: 127.111691 }}
      />
    </GoogleMap>
    ));

  export default MapWithAMarker;