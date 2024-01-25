import s from './inputDownload.module.scss';
import Photo from '@/app/_icons/Photo';
import clsx from 'clsx';

interface IInputDownload {
  className?: string;
}

export default function InputDownload({ className }: IInputDownload) {
  return (
    <label className={clsx(s.inputDownload, className)}>
      <input type='file' />
      <Photo />
    </label>
  );
}
