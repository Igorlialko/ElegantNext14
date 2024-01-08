import s from './cardBlog.module.scss';
import H7 from '@/app/_typography/H7/H7';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';
import Link from 'next/link';
import clsx from 'clsx';
import { TViews, views } from '@/app/(globalRoutes)/_components/ViewSortSelect/views';

export default function CardBlog({
  view,
  imageURL,
  imageAlt,
  title,
  link = false,
  linkURL = '',
  cardDate,
}: {
  view: TViews;
  imageURL: string;
  imageAlt: string;
  title: string;
  link?: boolean;
  linkURL?: string;
  cardDate?: string;
}) {
  const isDescription = view === views[2] || view === views[3];
  return (
    <Link
      className={clsx(
        s.cardBlog,
        view === views[2] && s.cardDescriptionColumn,
        view === views[3] && s.cardDescriptionRow
      )}
      href={linkURL}
    >
      <div className={s.image}>
        <img src={imageURL} alt={imageAlt} />
      </div>
      <div className={s.content}>
        <div className={s.title}>
          <H7>{title}</H7>
        </div>
        {isDescription && (
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis cumque
            distinctio ea et eum facilis fugiat fugit id itaque, libero molestiae mollitia
            necessitatibus, nulla officiis porro quia suscipit unde!
          </p>
        )}
        <div className={s.rest}>
          {link ? (
            <UnderLineLink isLink={false} className={s.link}>
              Read More
            </UnderLineLink>
          ) : (
            <span className={s.date}>{cardDate}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
