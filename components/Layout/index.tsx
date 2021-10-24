import styled from "styled-components";
import { FC } from "react";

export const Layout: FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  height: calc(100vh - 137px);
  min-height: calc(100vh - 100px);
`;
