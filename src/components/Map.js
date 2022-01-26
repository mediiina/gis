import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";


function Map() {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.8174862971075, 
    longitude: 18.32795468354902,
    zoom: 16,
  });
  const [showPopup, togglePopup] = React.useState(false);
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1Ijoic2Vub3JpdGFhYTciLCJhIjoiY2t5dWp0OW5yMWhoYTJ3dGcxMjJsNWpscSJ9.xVry-XUhgJfikcAjynGrDA"
    >
      {showPopup && (
        <Popup
          latitude={43.8174862971075}
          longitude={18.32795468354902}
          closeButton={true}
          closeOnClick={true}
          onClose={() => togglePopup(false)}
          anchor="top-right"
        >
          <div>Pop up marker</div>
        </Popup>
      )}
      {/* 43.8174862971075, 18.32795468354902 */}
      <Marker
        latitude={43.8174862971075}
        longitude={18.32795468354902}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          onClick={() => togglePopup(true)}
          alt=""
          style={{ height: 50, width: 50 }}
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
        />
      </Marker>
     
    </ReactMapGL>
  );
}

export default Map;