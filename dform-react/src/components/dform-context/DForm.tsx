import React, { memo } from "react";
import { FC } from "react";
import { useState, useCallback } from "react";
import { DFormContext, IDFormContext } from "./DFormContext";

interface IDForm {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const DForm: FC<IDForm> = memo((props) => {
  const { title, children } = props;
  const [formValues, _setFormValues] = useState({});

  const setValue = useCallback((name: string, value: string) => {
      _setFormValues({
        ...formValues,
        [name]: value
      });
    }, [formValues]);

  return (
    <DFormContext.Provider
      value={{
        values: formValues,
        setValue
      }}
    >
      <h2>{title}</h2>
      {children}
    </DFormContext.Provider>
  );
})