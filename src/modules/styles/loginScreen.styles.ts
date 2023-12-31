import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 67%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const LimitedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 498px;
  flex-direction: column;
`;
