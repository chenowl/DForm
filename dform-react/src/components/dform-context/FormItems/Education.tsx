import React, { FC, Fragment, useCallback } from "react";

import { DField } from '../DField';

interface IEducationProp {

}

interface IEducationLevelItemProp {
  onChange?: (value: string) => void;
  value?: string;
}

interface IMajorTypeItemProp {
  onChange?: (value: string) => void;
  value?: string;
}

export const Education: FC<IEducationProp> = (props) => {

  return (
    <Fragment>
      <DField name='education' label='最高学历'>
        <EducationLevel />
      </DField>
    </Fragment>
  )
}

export const EducationLevel: FC<IEducationLevelItemProp> = (props) => {
  const {value, onChange } = props;

  const handleChange = useCallback((event: React.FormEvent) => {
    onChange && onChange((event.target as HTMLSelectElement).value);
  }, [onChange])
  return (
    <select name="education" id="eduaction-select" value={value || '1'} onChange={handleChange}>
      <option value="1">本科</option>
      <option value="2">研究生</option>
    </select>
  )
}

// export const IMajorTypeItem: FC<IMajorTypeItemProp> = (props) => {
//   return (

//   )
// }