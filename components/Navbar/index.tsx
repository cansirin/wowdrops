import styled from "styled-components";
import Link from "next/link";
import { FC } from "react";
import { NextRouter } from "next/router";

const navigations = [
  { name: "Home", url: "/" },
  { name: "Boxes", url: "/boxes" },
  { name: "Items", url: "/items" },
];

type Props = {
  router: NextRouter;
};

export const Navbar: FC<Props> = ({ router }) => {
  // const [user] = useFetchUser();

  return (
    <NavbarContainer>
      <CompanyName>Wow Drops</CompanyName>
      {navigations.map((nav) => {
        return (
          <Link href={nav.url} key={nav.url}>
            <NavbarItem active={router.asPath === nav.url}>
              {nav.name}
            </NavbarItem>
          </Link>
        );
      })}
      {/*{user && <div>a</div>}*/}
      <Link href="/auth/login">
        <NavbarItem active={router.asPath === "/auth/login"}>Login</NavbarItem>
      </Link>
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

interface NavbarItemProps {
  active?: boolean;
}

const NavbarItem = styled.a<NavbarItemProps>`
  color: #d6a2ad;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: underline
    rgba(255, 228, 196, ${(props) => (props.active ? 1 : 0)});
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

const CompanyName = styled.h2`
  color: #c4ffd0;
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-decoration: underline double;
  text-underline-offset: 0.2em;
`;
