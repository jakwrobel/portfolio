import styled from "styled-components";
interface IStyledLevel {
  value: string;
}

export const StyledLevel = styled.div<IStyledLevel>`
  @include setFlex(row, flex-start, center);
  height: 100%;
  width: ${(props) => props.value};
  padding-left: 5%;
  box-sizing: border-box;
  color: white;
  font-size: 1.8rem;
  background-color: #e1cdb5;
  border-radius: 5px;
  white-space: nowrap;
`;
