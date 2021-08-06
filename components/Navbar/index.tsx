import styled from "styled-components";
import Link from "next/link";
import { FC } from "react";
import { FlexCol } from "../Flex";

const navigations = [
  { name: "Home", url: "/" },
  { name: "Boxes", url: "/boxes" },
  { name: "Items", url: "/items" },
  { name: "Login", url: "/login" },
];

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <CompanyName>Wow Drops</CompanyName>
      {navigations.map((nav) => {
        return (
          <FlexCol key={nav.url} style={{ cursor: "pointer" }}>
            <Link href={nav.url}>
              <NavbarItem>{nav.name}</NavbarItem>
            </Link>
          </FlexCol>
        );
      })}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  background: #0d1b1e;
  width: 100%;
  position: sticky;
  top: 0;
  transition: transform 0.3s ease-in-out;
  justify-content: space-around;
  z-index: 100;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

const NavbarItem = styled.a`
  color: #d6a2ad;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: underline rgba(255, 228, 196, 0);
  text-underline-offset: 0.2em;
  transition: color 0.3s linear, text-decoration-color 300ms;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    color: bisque;
    text-decoration-color: rgba(255, 228, 196, 1);
  }
`;

const CompanyName = styled.p`
  color: #c4ffd0;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.2em;
`;
