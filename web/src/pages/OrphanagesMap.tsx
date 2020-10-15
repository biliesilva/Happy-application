import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/pages/orphanages-map.css";

import mapMakerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const OrphanagesMap: React.FC = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get("/orphanages").then(({ data }) => {
            setOrphanages(data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy" />

                    <h2>Choose a orphanage in the map</h2>
                    <p>Many childrens are waiting for your visit :)</p>
                </header>

                <footer>
                    <strong>Stockholm</strong>
                    <span>Sweden</span>
                </footer>
            </aside>

            <Map
                center={[59.326242, 17.8419721]}
                zoom={11}
                style={{ width: "100%", height: "100%" }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size="20" color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size="32" color="#fff" />
            </Link>
        </div>
    );
};

export default OrphanagesMap;