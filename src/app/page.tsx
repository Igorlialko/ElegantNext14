import MainSlider from '@/app/_components/MainSlider/MainSlider';
import Newsletter from '@/app/_components/Newsletter/Newsletter';
import Articles from '@/app/_components/Articles/Articles';

export default function Home() {
  return (
    <main>
      <MainSlider />
      <Articles />
      <Newsletter />
    </main>
  );
}
