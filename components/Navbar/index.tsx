import styled from "styled-components";
import Link from "next/link";
import { FC } from "react";
import { NextRouter } from "next/router";
import { websiteColors } from "../../utils/website-colors";

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
      <Link href="/">
        <NavbarItem>
          <CompanyName>Wow Drops</CompanyName>
        </NavbarItem>
      </Link>
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
      {/*<Link href="/auth/login">*/}
      {/*  <NavbarItem active={router.asPath === "/auth/login"}>Login</NavbarItem>*/}
      {/*</Link>*/}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  background: ${websiteColors.juniper};
  width: 100%;
  position: sticky;
  top: 0;
  transition: transform 0.3s ease-in-out;
  justify-content: space-around;
  z-index: 100;
  overflow: hidden;
  padding-bottom: 1px;
  border-bottom: ${websiteColors.porshe} 2px solid;

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

interface NavbarItemProps {
  active?: boolean;
}

const NavbarItem = styled.a<NavbarItemProps>`
  color: ${(props) => (props.active ? websiteColors.porshe : "#fff")};
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: underline
    rgb(251, 204, 96, ${(props) => (props.active ? 1 : 0)});
  text-underline-offset: 0.2em;
  transition: color 0.3s linear, text-decoration-color 300ms;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    color: ${websiteColors.blueWood};
    text-decoration-color: ${websiteColors.blueWood};
  }
`;

const CompanyName = styled.span`
  color: ${websiteColors.porshe};
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.2em;
`;
