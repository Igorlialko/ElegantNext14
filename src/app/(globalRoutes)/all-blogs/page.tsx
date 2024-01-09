import Blogs from '@/app/(globalRoutes)/all-blogs/_components/Blogs/Blogs';
import Title from '@/app/(globalRoutes)/_components/Title/Title';

export default function AllBlogs() {
  return (
    <main>
      <Title
        srcBig='/images/product/ImagePlaceholderheaderBig.webp'
        srcSmall='/images/product/ImagePlaceholderheaderSmall.webp'
        altText='Our Blogs'
        linkText='Blog'
        pageTitle='Our Blog'
        pageSubtitle='Home ideas and design inspiration'
      />
      <Blogs />
    </main>
  );
}
