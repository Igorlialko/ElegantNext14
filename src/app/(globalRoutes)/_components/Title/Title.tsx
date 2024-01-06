import s from '@/app/(globalRoutes)/_components/Title/title.module.scss';
import Link from 'next/link';
import ChevronRightIcon from '@/app/_icons/arrows/ChevronRightIcon';

interface ITitle {
  srcBig: string;
  srcSmall: string;
  altText: string;
  linkText: string;
  pageTitle: string;
  pageSubtitle: string;
}

const Title = ({ srcBig, srcSmall, altText, linkText, pageTitle, pageSubtitle }: ITitle) => {
  return (
    <section>
      <div className='_container'>
        <div className={s.shopTitle}>
          <div className={s.shopImage}>
            <picture>
              <source media='(max-width: 799px)' srcSet={srcBig} />
              <source media='(min-width: 800px)' srcSet={srcSmall} />
              <img src={srcBig} alt={altText} width={100} height={100} />
            </picture>
          </div>
          <div className={s.shopText}>
            <div className={s.shopNavigation}>
              <Link href='/' className={s.shopHome}>
                Home
              </Link>
              <ChevronRightIcon className={s.shopIcon} />
              <p className={s.shopPage}>{linkText}</p>
            </div>
            <h1 className={s.shopT}>{pageTitle}</h1>
            <h2 className={s.shopP}>{pageSubtitle}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
