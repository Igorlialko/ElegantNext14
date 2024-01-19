import s from './Post.module.scss';
import H3 from '@/app/_typography/H3/H3';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import Calendar from '@/app/_icons/Calendar';
import BreadCrumbs from '@/app/[locale]/(globalRoutes)/_components/BreadCrumbs/BreadCrumbs';

export default function Post() {
  return (
    <section className={s.post}>
      <div className='_container'>
        <BreadCrumbs className={s.crumbs} />
        <div className={s.articleInfo}>
          <span className={s.articleName}>Article</span>
          <H3 className={s.articleTitle}>How to make a busy bathroom a place to relax</H3>
          <ul className={s.articleList}>
            <li>
              <ProfileIcon />
              Henrik Annemark
            </li>
            <li>
              <Calendar />
              October 16, 2023
            </li>
          </ul>
        </div>
        <div className={s.postContent}>
          <img src='/images/blogs/posts/postImg.webp' alt='img' />
          <p>
            Your bathroom serves a string of busy functions on a daily basis. See how you can make
            all of them work, and still have room for comfort and relaxation.
          </p>
        </div>
      </div>
    </section>
  );
}
