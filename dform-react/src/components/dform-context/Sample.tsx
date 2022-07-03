import { FC, memo } from 'react';

import { useContext } from 'react';

import { DForm } from './DForm';
import { DField } from './DField';
import { InputItem } from './FormItems/BaseInputItem';
import { DFormContext } from './DFormContext';
// import { Education } from './FormItems/Education';
import { Education } from './FormItems/Education';
interface ISample {

};

const Inspector = memo(() => {
  const formValue = useContext(DFormContext);
  return (
    <div>
      <pre>
        <p>context 结构</p>
        <p>{JSON.stringify(formValue, null, 2)}</p>
      </pre>
    </div>
  )
})

export const Sample: FC<ISample> = (props) => {
  return (
    <DForm title='Sample1'>
      <DField label='用户名' name='userName'>
        <InputItem />
      </DField>
      <DField label='密码' name={'pwd'}>
        <InputItem />
      </DField>
      <Education />
      <Inspector />
    </DForm>
  );
}