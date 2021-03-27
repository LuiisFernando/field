import React from "react";
import GoogleMapReact from "google-map-react";

import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default function MapComponent({ children, ...props }) {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API,
          language: 'en'
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </Wrapper>
  );
}