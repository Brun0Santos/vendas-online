import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';

interface IInputProp extends InputPropsAntd {
  title?: string;
}

function Input({ title, ...props }: IInputProp) {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <InputAntd {...props} />
    </BoxInput>
  );
}

export default Input;
