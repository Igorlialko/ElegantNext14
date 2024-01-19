import s from './blog.module.scss';
import H3 from '@/app/_typography/H3/H3';
import ProfileIcon from '@/app/_icons/ProfileIcon';
import Calendar from '@/app/_icons/Calendar';
import BreadCrumbs from '@/app/[locale]/(globalRoutes)/_components/BreadCrumbs/BreadCrumbs';
import { TBlog } from '@/modules/blog/types';
import { dateFormatBlog } from '@/modules/blog/utils/formatter';

export default function Blog({ blog }: { blog: TBlog }) {
  return (
    <section className={s.post}>
      <div className='_container'>
        <BreadCrumbs className={s.crumbs} title={blog.title} />
        <div className={s.articleInfo}>
          <span className={s.articleName}>Article</span>
          <H3 className={s.articleTitle}>{blog.title}</H3>
          <ul className={s.articleList}>
            <li>
              <ProfileIcon />
              {blog.authorName}
            </li>
            <li>
              <Calendar />
              {dateFormatBlog(blog.date)}
            </li>
          </ul>
        </div>
        <div className={s.postContent}>
          <img src={blog.image} alt={blog.title.slice(0, 10)} />
          <p>{blog.content}</p>
        </div>
      </div>
    </section>
  );
}
