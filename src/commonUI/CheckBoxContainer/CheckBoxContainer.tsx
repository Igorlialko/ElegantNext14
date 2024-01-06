import s from './checkBoxContainer.module.scss';
import React from 'react';

interface IcheckBoxContainer {
  children?: React.ReactNode;
}

const CheckBoxContainer = ({ children }: IcheckBoxContainer) => {
  return <div className={s.checkBoxContainer}>{children}</div>;
};

export default CheckBoxContainer;
