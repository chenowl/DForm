import { useContext, cloneElement, ReactElement } from "react";

import { DFormContext, IDFormContext } from "./DFormContext";


export const DField = (props: any) => {
  const { name, children } = props;
  const formCtx: IDFormContext = useContext(DFormContext);
  const onChange = (value: string) => {
    formCtx.setValue(name, value);
  }
  return (
    <div>{cloneElement(children as ReactElement, {onChange, value})}</div>
  )
}