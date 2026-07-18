import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ lat, lon, place }) {

    if (!lat || !lon) return null;

    return (

        <MapContainer
            center={[lat, lon]}
            zoom={13}
            style={{
                height: "400px",
                width: "100%",
                borderRadius: "15px"
            }}
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[lat, lon]}>
                <Popup>
                    📍 {place}
                </Popup>
            </Marker>

        </MapContainer>

    );

}

export default MapView;