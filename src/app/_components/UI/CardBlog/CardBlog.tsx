import s from './cardBlog.module.scss';
import H7 from '@/app/_components/typography/H7/H7';
import UnderlineLink from '@/app/_components/UI/UnderlineLink/UnderlineLink';

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
    <a className={s.cardBlog} href={linkURL}>
      <div className={s.cardBlog__image}>
        <img src={imageURL} alt={imageAlt} />
      </div>
      <div className={s.cardBlog__title}>
        <H7>{title}</H7>
      </div>
      <div className={s.cardBlog__rest}>
        {link ? (
          <UnderlineLink link={false}>Read more</UnderlineLink>
        ) : (
          <p className={s.cardBlog__rest_date}>{cardDate}</p>
        )}
      </div>
    </a>
  );
}
