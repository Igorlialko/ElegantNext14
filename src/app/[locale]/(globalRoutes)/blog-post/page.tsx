import Post from '@/app/[locale]/(globalRoutes)/blog-post/_components/Post/Post';
import Articles from '@/app/[locale]/(globalRoutes)/_components/Articles/Articles';

export default function BlogPost() {
  return (
    <main>
      <Post />
      <Articles />
    </main>
  );
}
