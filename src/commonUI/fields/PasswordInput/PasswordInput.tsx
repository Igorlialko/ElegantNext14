import TextInput from '@/commonUI/fields/TextInput/TextInput';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { useState } from 'react';
import s from './paswInput.module.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface IPasswordInput {
  register: UseFormRegister<any>;
  placeholder?: string;
  name?: string;
}

const PasswordInput = ({
  placeholder = 'Password',
  register,
  name = 'password',
}: IPasswordInput) => {
  const [type, setType] = useState('password');
  const onClickPasswordButton = () => {
    setType((prevType) => {
      if (prevType === 'password') {
        return 'text';
      }
      return 'password';
    });
  };

  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      {...register(name)}
      buttonSlot={
        <button type='button' className={s.passwordButton} onClick={onClickPasswordButton}>
          {type === 'password' ? (
            <VisibilityOffOutlinedIcon sx={{ color: '#6C7275' }} />
          ) : (
            <VisibilityOutlinedIcon sx={{ color: '#6C7275' }} />
          )}
        </button>
      }
    />
  );
};

export default PasswordInput;
