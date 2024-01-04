import s from './sectionTitle.module.scss';
import H4 from '@/app/_typography/H4/H4';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';

interface ITitle {
  urlLink: string;
  linkText: string;
  title: string;
}

export default function SectionTitle({ urlLink, linkText, title }: ITitle) {
  return (
    <div className={s.sectionTitle}>
      <H4>{title}</H4>
      <UnderLineLink url={urlLink}>{linkText}</UnderLineLink>
    </div>
  );
}
