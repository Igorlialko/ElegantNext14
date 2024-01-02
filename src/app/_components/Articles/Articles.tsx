import s from './articles.module.scss';
import SectionTitle from '@/app/_components/SectionTitle/SectionTitle';
import CardBlog from '@/modules/blog/ui/CardBlog/CardBlog';
import { cards } from '@/modules/blog/utils/mockData';

export default function Articles() {
  return (
    <section className={s.articles}>
      <div className='_container'>
        <div className={s.articlesBlock}>
          <SectionTitle urlLink='/shop' linkText='More Articles' title='Articles' />
          <div className={s.cards}>
            {cards.map((card) => (
              <CardBlog
                key={card.title}
                imageURL={card.imageURL}
                imageAlt={card.imageAlt}
                title={card.title}
                link
                linkURL={card.linkURL}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
