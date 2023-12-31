import s from './sectionTitle.module.scss';
import H4 from '@/app/_components/typography/H4/H4';
import UnderlineLink from '@/app/_components/UI/UnderlineLink/UnderlineLink';

export default function SectionTitle({
  urlLink,
  linkText,
  title,
}: {
  urlLink: string;
  linkText: string;
  title: string;
}) {
  return (
    <div className={s.sectionTitle}>
      <H4>{title}</H4>
      <UnderlineLink url={urlLink}>{linkText}</UnderlineLink>
    </div>
  );
}
