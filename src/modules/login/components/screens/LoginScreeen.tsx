import Input from '../../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../../../styles/loginScreen.styles';

const LoginScreeen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="Usuario" />
          <Input title="Password" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreeen;
