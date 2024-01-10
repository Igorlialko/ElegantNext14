import s from './radioButton.module.scss';

interface IRadioButton {
  name: string;
}

export default function RadioButton({ name }: IRadioButton) {
  return (
    <div className={s.radio}>
      <input type='radio' name={name} />
      <div className={s.radioButton} />
    </div>
  );
}
