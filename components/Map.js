import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import axios from "axios";
const Map = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }, 0);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;

    const getTravelTime = async () => {
      try {
        const response = await axios.get(URL);
        dispatch(setTravelTimeInformation(response.data.rows[0].elements[0]));
      } catch (error) {
        console.log(error);
      }
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  const initialRegion = {
    latitude: origin?.location?.lat,
    longitude: origin?.location?.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="mutedStandard"
      initialRegion={initialRegion}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location?.lat,
            longitude: destination?.location?.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
