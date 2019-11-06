import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class EventDetailsMap extends React.Component {
  render() {
    const accessToken = 'pk.eyJ1IjoiZGFlbmVyeXM5NSIsImEiOiJjazJmYjNlN2QwZ3luM2xwYnlqZnE5Z3JmIn0.0eaxPyVL6cJ0QxnXXP_fHg';
    const url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
    const { latitude, longitude } = this.props;

    return (
      <>
        <LeafletMap
          center={[latitude, longitude]}
          zoom={13}
          maxZoom={18}
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          dragging
          animate
          easeLinearity={0.35}
          id="map"
        >
          <TileLayer
            url={url}
            id="mapbox.streets"
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
      </>
    );
  }
}

export default EventDetailsMap;
