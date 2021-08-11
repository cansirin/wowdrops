import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
};

export const SearchBar: FC<Props> = ({ query, setQuery, onClick }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search-input">
        <HiddenSpan>Search blog posts</HiddenSpan>
      </label>
      <SearchInput
        type="text"
        id="search-input"
        placeholder="Search an item"
        name="search"
        value={query}
        onChange={onChange}
      />
      <Button onClick={onClick}>Add to list</Button>
    </div>
  );
};

const SearchInput = styled.input`
  display: flex;
  width: 20rem;
  background: #f2f1f9;
  border: none;
  padding: 0.5rem;
  border-radius: 0.2rem;
`;

const HiddenSpan = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
