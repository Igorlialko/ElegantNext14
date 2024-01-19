import Blog from '@/app/[locale]/(globalRoutes)/all-blogs/[slug]/_components/Blog/Blog';
import Articles from '@/app/[locale]/(globalRoutes)/_components/Articles/Articles';
import { getBlogFromSlug } from '@/modules/blog/api/fetchers';

export default async function BlogPost({ params: { slug } }: { params: { slug: string } }) {
  let blog;
  let error;
  try {
    blog = await getBlogFromSlug(slug);
  } catch (e) {
    console.log('error');
    // todo: add snackbar
    error = e;
  }
  return (
    <main>
      {blog?.data && <Blog blog={blog.data} />}
      <Articles />
    </main>
  );
}
