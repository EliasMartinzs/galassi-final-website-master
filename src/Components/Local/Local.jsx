import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import { LocalMain, LocalTitle, LocalSubTitle } from "./Local.elements";

const Local = () => {
  const position = [-23.5877956, -50.7656887];
  const zoom = 20;

  return (
    <>
      <LocalMain>
        <LocalTitle>Nossa Localização</LocalTitle>
        <LocalSubTitle>
          R. Um, 288-302, Nova Santa Bárbara - PR, 86250-000
        </LocalSubTitle>
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Physical Academia</Popup>
          </Marker>
        </MapContainer>
      </LocalMain>
    </>
  );
};

export default Local;
