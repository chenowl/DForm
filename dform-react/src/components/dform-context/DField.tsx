import { useContext, useCallback, cloneElement, useMemo, FC, Fragment, memo } from "react";
import { get } from "lodash";

import { DFormContext, IDFormContext } from "./DFormContext";

interface IDFieldProps {
  name: string,
  label: string,
  children: JSX.Element
}

export const DField: FC<IDFieldProps> = memo((props) => {
  const { name, label, children } = props;
  const formCtx: IDFormContext = useContext(DFormContext);

  const onChange = useCallback((value: string) => {
    formCtx.setValue(name, value);
  }, [name, formCtx]);

  const value = useMemo(() => {
    return get(formCtx.values, name, null);
  }, [get(formCtx.values, name, null)]);

  return (
    <Fragment>
      <p>{label}: </p>
      <div>{cloneElement(children, {onChange, value})}</div>
    </Fragment>
  );
});