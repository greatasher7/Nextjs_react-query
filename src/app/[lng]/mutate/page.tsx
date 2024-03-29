"use client";
import styled from "styled-components";
import { Age } from "./age";
import { Azoom } from "./azoom";
import { Gender } from "./gender";
import { Add } from "./add";

export default function Mutate() {
  return (
    <Main>
      <Add />
      <Age />
      <Azoom />
      <Gender />
      mutate1
    </Main>
  );
}

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 30px;
  padding: 30px;
`;
