import React, { FC, memo, useCallback } from 'react';

interface IInputItem {
  onChange?: (value: string) => void;
  value?: string;
}

export const InputItem: FC<IInputItem> = memo((props) => {
  const { value, onChange } = props;
  const onValueChange = useCallback((event: React.FormEvent) => {
    onChange && onChange((event.target as HTMLInputElement).value)
  }, [onChange]);
  
  return (
    <input onChange={onValueChange} defaultValue={value} type="text" />
  )
})