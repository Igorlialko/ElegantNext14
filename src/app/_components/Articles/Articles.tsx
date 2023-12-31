import s from './articles.module.scss';
import SectionTitle from '@/app/_components/UI/SectionTitle/SectionTitle';
import CardBlog from '@/app/_components/UI/CardBlog/CardBlog';

export default function Articles() {
  const cards = [
    {
      imageURL: '/images/articles/img.webp',
      imageAlt: 'image',
      title: '7 ways to decor your home',
      linkURL: '/',
    },
    {
      imageURL: '/images/articles/img-1.webp',
      imageAlt: 'image',
      title: 'Kitchen organization',
      linkURL: '/',
    },
    {
      imageURL: '/images/articles/img-2.webp',
      imageAlt: 'image',
      title: 'Decor your bedroom',
      linkURL: '/',
    },
  ];
  return (
    <section className={s.articles}>
      <div className='_container'>
        <div className={s.articles__block}>
          <SectionTitle urlLink='/' linkText='More Articles' title='Articles' />
          <div className={s.articles__block_cards}>
            {cards.map((card) => {
              return (
                <CardBlog
                  key={card.title}
                  imageURL={card.imageURL}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  link
                  linkURL={card.linkURL}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
