import React from "react";
import GoogleMapReact from "google-map-react";

import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default function MapComponent({ children, ...props }) {
  console.log(process.env.REACT_APP_NOT_SECRET_CODE)
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
          language: 'en'
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </Wrapper>
  );
}