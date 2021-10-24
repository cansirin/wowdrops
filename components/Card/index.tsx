import styled from "styled-components";
import React, { FC } from "react";
import { gradientColor, qualityColor } from "../../utils/qualityColor";
import { Emoji } from "..";
import { Item } from "../../apollo/src/types";
import { websiteColors } from "../../utils/website-colors";

type Props = {
  item?: Item;
  onRemove?: () => void;
  // for react-tooltip
  dataFor?: string;
};

const emptyItem: Item = {
  quality: "???",
  name: "???",
  dropRate: "???",
  price: "???",
  media: "https://picsum.photos/20/30/?blur",
};
console.log(gradientColor(emptyItem.quality));

export const Card: FC<Props> = (props) => {
  let item = props.item;

  if (!item) {
    item = emptyItem;
  }

  const handleRemove = () => {
    if (props.onRemove) {
      props.onRemove();
    }
  };

  return (
    <CardContainer
      onClick={handleRemove}
      {...props}
      data-tip
      data-for={props.dataFor}
      linearGradient={gradientColor(item.quality)}
    >
      <CardDetail fontSize={20}>{item.name}</CardDetail>
      <CardMedia src={item.media} alt="item" />
      <CardDetails>
        <CardDetail>{item.dropRate}% drop chance</CardDetail>
        <CardDetail>
          {item.price} silver <Emoji label="coin" symbol="🪙" />
        </CardDetail>
        <CardDetail color={qualityColor(item.quality)}>
          {item.quality}
        </CardDetail>
      </CardDetails>
    </CardContainer>
  );
};

interface DetailProps {
  readonly color?: string;
  readonly fontSize?: number;
}

const CardDetail = styled.span<DetailProps>`
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize}px;
`;

interface ContainerProps {
  readonly linearGradient?: string;
}

export const CardBack = styled.div`
  display: flex;
  position: relative;
  height: 15rem;
  background-image: url(https://picsum.photos/450/450);
`;

const CardContainer = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  list-style: none;
  padding: 0.6rem;
  margin: 0.5rem;
  height: 15rem;
  background: ${(props) => props.linearGradient}, ${websiteColors.blueWood};
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    width: 4rem;
    height: 0.2rem;
    bottom: 0;
    left: 50%;
    margin-left: -30px;
    background-color: #61b07e;
    box-shadow: -2px -2px 17px rgb(110 240 160 / 30%),
      -2px -2px 10px rgb(110 240 160 / 60%);
  }
`;

const CardMedia = styled.img`
  border-radius: 5px;
  margin: auto;
  width: 7rem;
  height: 7rem;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;
