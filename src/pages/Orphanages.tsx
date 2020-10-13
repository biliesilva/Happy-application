import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />
                    <h2>Choose a workshop on the map:</h2>
                    <p>Many children are waiting for your visit :)</p>
                </header>
                <footer>
                    <strong>Stockholm</strong>
                    <span>Sweden</span>
                </footer>
            </aside>
            <Map
                center={[-22.872064, -43.3717248]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}

            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
