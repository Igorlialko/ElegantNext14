import s from './cardBlog.module.scss';
import H7 from '@/app/_typography/H7/H7';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';
import Link from 'next/link';

export default function CardBlog({
  imageURL,
  imageAlt,
  title,
  link = false,
  linkURL = '',
  cardDate,
}: {
  imageURL: string;
  imageAlt: string;
  title: string;
  link?: boolean;
  linkURL?: string;
  cardDate?: string;
}) {
  return (
    <Link className={s.cardBlog} href={linkURL}>
      <span className={s.image}>
        <img src={imageURL} alt={imageAlt} />
      </span>
      <span className={s.title}>
        <H7>{title}</H7>
      </span>
      <span className={s.rest}>
        {link ? (
          <UnderLineLink isLink={false} className={s.link}>
            Read more
          </UnderLineLink>
        ) : (
          <span className={s.date}>{cardDate}</span>
        )}
      </span>
    </Link>
  );
}
