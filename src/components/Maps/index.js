import React from "react";
import GoogleMapReact from "google-map-react";

import * as Styled from './styles';

export default function MapComponent({ children, ...props }) {
  return (
    <Styled.Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API,
          language: 'en'
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </Styled.Wrapper>
  );
}