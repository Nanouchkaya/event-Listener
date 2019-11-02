import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Test extends React.Component {

  render() {
    const accessToken = 'pk.eyJ1IjoiZGFlbmVyeXM5NSIsImEiOiJjazJmYjNlN2QwZ3luM2xwYnlqZnE5Z3JmIn0.0eaxPyVL6cJ0QxnXXP_fHg';
    const url = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}`;
    const { latitude, longitude, data } = this.props;
    return (
      <>
   
      { data.length === 0 && (
        <LeafletMap
          center={[latitude, longitude]}
          zoom={13}
          maxZoom={18}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url={url}
            id='mapbox.streets'
            accessToken={accessToken}
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Google France
              8 rue de Londres
              75009 Paris
            </Popup>
          </Marker>
        </LeafletMap>
      )}
 
 {console.log(data)}
      {data.length > 0 && (
        <LeafletMap
          center={[48.8566969, 2.3514616]}
          zoom={11}
          maxZoom={18}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url={url}
            id='mapbox.streets'
            accessToken={accessToken}
          />
          {data.map((event) => {
            return (
            <Marker position={[event.latitude, event.longitude]}>
              <Popup>
                Google France
                8 rue de Londres
                75009 Paris
              </Popup>
            </Marker> 
            )
          })}
          
        </LeafletMap>
      )}
     </> 
    );
  }
}

export default Test;
