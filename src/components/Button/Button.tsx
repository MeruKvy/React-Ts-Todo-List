import styled from "styled-components";
import { ButtonTypeEnum } from "../enums";

const Sbutton = styled.button<{ type: ButtonTypeEnum }>`
  border-radius: 4px;
  background-color: ${(props) => props.type};
  color: white;
  padding: 8px 40px;
  border: none;
  margin: 2px;
`;

export function Button({
  text,
  type,
  funcOnChlick,
}: {
  text: string;
  type: ButtonTypeEnum;
  funcOnChlick: () => void;
}) {
  return (
    <Sbutton type={type} onClick={funcOnChlick}>
      {text}
    </Sbutton>
  );
}
