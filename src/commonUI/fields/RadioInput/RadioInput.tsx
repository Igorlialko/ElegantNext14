import s from './radioInput.module.scss';
import RadioButton from '@/commonUI/RadioButton/RadioButton';

interface IRadioInput {
  name: string;
  nameLabel: string;
  price: number;
}

export default function RadioInput({ name, nameLabel, price }: IRadioInput) {
  return (
    <label className={s.radioInput}>
      <RadioButton name={name} />
      <span className={s.name}>{nameLabel}</span>
      <span>${price}</span>
    </label>
  );
}
