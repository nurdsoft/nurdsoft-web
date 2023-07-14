import React from 'react';
import './aboutPage3.scss';
import India from '../../images/india.png';
import America from '../../images/america.png';
import Philippines from '../../images/phillipines.png';
import Russia from '../../images/russia.png';
import Wrapper from '../wrapper';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import geoUrl from './features.json'

interface MapMarker {
  name: string,
  coordinates: [number, number]
  flag: any,
}

const markers: MapMarker[] = [
  {
    name: "India",
    coordinates: [77.031915, 28.699358],
    flag: India,
  },
  {
    name: "Russia",
    coordinates: [97.027175, 61.819707],
    flag: Russia,
  },
  {
    name: "Philippines",
    coordinates: [123.334720, 12.268340],
    flag: Philippines,
  },
  {
    name: "North America",
    coordinates: [-106.689244, 40.635657],
    flag: America,
  },
  {
    name: "South America",
    coordinates: [-58.261509, -13.938301],
    flag: America,
  },
];

const AboutPage3 = () => {

  return (
    <Wrapper>
      <div className='aboutPage3_parentContainer'>
        <h1 className="aboutPage3_heading">
          Globally <br/> Distributed Team
        </h1>
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 187
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={"#0B2C46"}
                  />
                );
              })
            }
          </Geographies>
          {markers.map(({ name, coordinates, flag }) => (
            <Marker key={name} coordinates={coordinates}>
                <image xlinkHref={flag} width={22} height={22}/>
                <title>{name}</title>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </Wrapper>
  )
}

export default AboutPage3