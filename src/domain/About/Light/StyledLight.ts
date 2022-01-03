import styled from "styled-components";

interface IStyledLight {
  width: number;
  variant: string;
}

export const StyledLight = styled.div<IStyledLight>`
  width: 20%;
  height: ${(props) => props.width}px;
  border-radius: 50%;
  background-color: ${(props) => props.variant};
`;
