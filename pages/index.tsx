import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { qualityColor } from "../utils/qualityColor";

const menuItems = [
  {
    name: "Common",
    active: true,
  },
  { name: "Uncommon", active: true },
  { name: "Rare", active: true },
  { name: "Epic", active: true },
  { name: "Legendary", active: false },
  { name: "Heirloom", active: false },
  { name: "Artifact", active: false },
];

const HomePage = () => {
  return (
    <HomeMenuContainer>
      <HomeMenuHeader>Start your journey by selecting a box</HomeMenuHeader>
      {menuItems.map((item, index) => {
        return (
          <Link key={index} href={`/boxes/${item.name}`}>
            <HomeMenuItem backgroundColor={item.active ? item.name : "#fff"}>
              {item.name}
              {!item.active ? " 🔒" : ""}
            </HomeMenuItem>
          </Link>
        );
      })}
    </HomeMenuContainer>
  );
};

const HomeMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;

const HomeMenuHeader = styled.h2`
  margin: 1.3rem;
`;

interface HomeMenuItemProps {
  readonly backgroundColor: string;
}

const HomeMenuItem = styled.div<HomeMenuItemProps>`
  font-size: 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  cursor: pointer;

  
  &:hover {
    background-color: ${(props) => qualityColor(props.backgroundColor)}
`;

export default HomePage;
