import React from "react";
import InteractiveMap, {Marker} from "react-map-gl";
import Pin from './pin';

/**
 * Note you have to pass a child to <Marker />
 * as it just places an element at the correct
 * position.
 */

function Maps() {
  /**
   * Store marker locations in state
   * On click, grab the lngLat from the event
   * and add it to the state.
   */
  const [markers, setMarkers] = React.useState([]);
  const handleClick = ({ lngLat: [longitude, latitude] }) =>
    setMarkers(markers => [...markers, { longitude, latitude }]);

  /**
   * Manage viewport in state
   */
  const [viewport, setViewport] = React.useState({
    latitude: 60.395,
    longitude: 5.32,
    zoom: 12.8,
  });

  return (
    <InteractiveMap
      // onClick, capture the pointer event so we can
      // get the lngLat of the click.
      onClick={handleClick}
      // required for interactivity
      
      mapStyle="mapbox://styles/ebredla/ckckctgmr4u571jo5628ll2gq"
      width="100vw"
      height="100vh"
      mapboxApiAccessToken="pk.eyJ1IjoiZWJyZWRsYSIsImEiOiJjam5jeTJtenUwMjYwM3BvNGUyNW1jZWdhIn0.-tQzgIVEIdLKqbTKsy4NXg"
      
      onViewportChange={viewport => setViewport(viewport)}
      {...viewport}
    >
      {markers.length
        ? markers.map((m, i) => (
            // <Marker /> just places its children at the right lat lng.
            <Marker {...m} key={i} >
               <Pin size={20} />
            </Marker>
          ))
        : null}
    </InteractiveMap>
  );
}

export default Maps;
