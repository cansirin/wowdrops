import { FC } from "react";

interface Props {
  label: string;
  symbol: string;
}

export const Emoji: FC<Props> = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
