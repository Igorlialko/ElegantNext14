import s from './skeletBlogCard.module.scss';
import { Skeleton } from '@mui/material';

export default function SkeletBlogCard() {
  return (
    <div className={s.skeletBlogCard}>
      <Skeleton className={s.skeletImage} variant='rectangular' animation='wave' />
      <div className={s.skeletContent}>
        <Skeleton className={s.skeletTitle} variant='rounded' animation='wave' />
        <Skeleton className={s.skeletDate} variant='rounded' animation='wave' />
      </div>
    </div>
  );
}
