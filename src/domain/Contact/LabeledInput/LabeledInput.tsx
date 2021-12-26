import React from "react";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Label } from "../Label/Label"

interface ILabeledInput {
  name: string;
  element: string;
  type: string;
  variant?: string
}

export const LabeledInput: React.FC<ILabeledInput> = ({
  name,
  element,
  type,
  variant
}) => {
  let labeledInput = <></>
  if (element === "textarea") {
    labeledInput = (
      <>
        <Label name={name} />
        <TextArea name={name} />
      </>
    );
  }
  if (element === "input") {
    labeledInput = (
      <>
        <Label name={name} />
        <Input type={type} name={name} variant={variant} />
      </>
    );
  }

  return labeledInput;
};
