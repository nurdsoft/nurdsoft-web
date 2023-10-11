import './aboutpage3.scss';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import React, { useEffect } from 'react';

import America from '../../images/america.png';
import Brazil from '../../images/brazil.png';
import India from '../../images/india.png';
import Philippines from '../../images/phillipines.png';
import Ukraine from '../../images/ukraine.png';
import Wrapper from '../wrapper';
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
    name: "Ukraine",
    coordinates: [31.228354, 49.208863],
    flag: Ukraine,
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
    flag: Brazil,
  },
];

const AboutPage3 = () => {

  const getScrollTop = () => {
    const page3 = document.getElementById('aboutPage3_wrapper');
    if(!page3) return;
    const page3Top = page3.getBoundingClientRect().top;
    const pageHeight = page3.getBoundingClientRect().height;
    
    if(page3Top < (pageHeight) && page3Top > 0){
      const opacity = ((pageHeight - page3Top) / pageHeight) * 2
      page3.style.opacity = opacity.toFixed(1);
    }
  }

  useEffect(() => {
    if(typeof document === 'undefined') return;
    document.getElementById('parallaxLayoutAbout')?.addEventListener('scroll', getScrollTop);
    return () => {
      document.getElementById('parallaxLayoutAbout')?.removeEventListener('scroll', getScrollTop);
    }
  }, [])

  return (
    <Wrapper id='aboutPage3_parentContainer' >
      <div className='aboutPage3_parentContainer' id='aboutPage3_wrapper' >
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
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    stroke="#f2f3ff20"
                    strokeWidth="0.3"
                    className="focus:outline-none"
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
