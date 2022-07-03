import { useState, useCallback } from "react";
import { DFormContext, IDFormContext } from "./DFormContext";

const _setValue = (name: string, value: string, formValues: Record<string, any>, 
  _setFormValues: React.Dispatch<React.SetStateAction<Record<string, any>>>) => {
    _setFormValues({
      ...formValues,
      [name]: value
    });
}

export const DForm = (props: any) => {
  const { children } = props;
  const [formValues, _setFormValues] = useState({});
  const setValue = useCallback(
    (name: string, value: string) => _setValue(name, value, formValues, _setFormValues),
    [formValues, _setFormValues]
  );
  return (
    <DFormContext.Provider
      value={{
        values: formValues,
        setValue
      }}
    >
      {children}
    </DFormContext.Provider>
  )
}