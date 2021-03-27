import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import MapComponent from '../../components/Maps';
import Marker from '../../components/Marker';
import Accordion from '../../components/Accordion';

import * as Styled from './styles';

import api from '../../services/api';

function Home() {
    const [networks, setNetworks] = useState();
    const [networkByCountry, setNetworkByCountry] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [countNetworkByCountry, setCountNetworkByContry] = useState(0);
    const [stations, setStations] = useState();

    const defaultProps = {
        center: {
            lat: -23.5561884,
            lng: -46.6616899
        },
        zoom: 1
    };

    useEffect(() => {
        async function loadData() {
            const { data } = await api.get('v2/networks');
            console.log(data.networks);
            setNetworks(data.networks);

            const networkCountByCountry = new Map();

            data.networks.forEach(network => {
                const country = network.location.country
                const countryObject = networkCountByCountry.has(country) ? networkCountByCountry.get(country) : {
                    id: country,
                    count: 0
                };
                countryObject.count = countryObject.count + 1
                networkCountByCountry.set(countryObject.id, countryObject)
            });

            const networkCountByCountryArray = [...networkCountByCountry.values()]

            setNetworkByCountry(networkCountByCountryArray);
            console.log(networkCountByCountryArray);
        }

        loadData();
    }, []);


    async function markerClick(network) {

        const country = network.location.country;

        const networkCountry = networkByCountry.find(x => x.id === country);

        const stationResponse = await api.get(network.href);

        console.log(stationResponse.data.network.stations);

        const stati = stationResponse.data.network.stations.length > 0 ? stationResponse.data.network.stations.map(station => {
            return {
                ...station,
                open: false
            }
        }) : null;
        setStations(stati);
        setSelectedNetwork(network);
        setShowModal(true);
        setCountNetworkByContry(networkCountry.count);
    }

    function closeModal() {
        setShowModal(false);
        setSelectedNetwork(null);
        setStations(null);
    }

    function toggleStation(index) {
        console.log('toggled ', index)
        setStations(
            stations.map((station, i) => {
                if (i === index) {
                    station.open = !station.open;
                } else {
                    station.open = false;
                }
                return station;
            })
        );
    }

    return (
        <Styled.Container>
            <MapComponent
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {networks && networks.map((net, index) => (

                    <Marker
                        key={index}
                        lat={net.location.latitude}
                        lng={net.location.longitude}
                        city={net.location.city}
                        country={net.location.country}
                        network={net}
                        onClick={markerClick}
                    />
                ))}
            </MapComponent>
            <Styled.Modal visible={showModal}>
                <div className="container">
                    <div className="modal-title">
                        <FiX color="#000" onClick={() => closeModal()} />
                    </div>
                    <div className="modal-body">
                        {selectedNetwork && (
                            <>
                                <p>Contry: {selectedNetwork.location.country}</p>
                                <p>City: {selectedNetwork.location.city}</p>
                                <p>Company: {selectedNetwork.company.join(', ')}</p>
                                <p>Total Networks of this country: {countNetworkByCountry}</p>

                                <p>Total stations of this network: {stations ? stations.length : 0}</p>


                                <div className="station-container">
                                    {stations ? (
                                        stations.map((station, index) => (
                                            <Accordion
                                                key={index}
                                                index={index}
                                                title={station.name}
                                                open={station.open}
                                                content={station.name}
                                                toggle={toggleStation}
                                            />
                                        )
                                        )) : (
                                        <h1>There's no station to this network</h1>
                                    )}
                                </div>


                            </>
                        )}
                    </div>
                </div>
            </Styled.Modal>
        </Styled.Container>
    );
}

export default Home;