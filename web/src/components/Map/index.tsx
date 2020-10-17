import React from 'react';
import { Map as LeafletMap, MapProps as LeafletMapProps, TileLayer } from 'react-leaflet'

interface MapProps extends LeafletMapProps {
    interactive?: boolean
    children: React.ReactNode
}

export default function Map({ children, interactive = true, ...props }: MapProps) {
    return (
        <LeafletMap
            center={[-27.2092052, -49.6401092]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            dragging={interactive}
            touchZoom={interactive}
            zoomControl={interactive}
            scrollWheelZoom={interactive}
            doubleClickZoom={interactive}
            {...props}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {children}
        </LeafletMap>
    );
}