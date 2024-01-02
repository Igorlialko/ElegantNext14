import s from './underlineLink.module.scss';

interface IUnderlineLink {
  children: string;
  url?: string;
  link?: boolean;
}
export default function UnderlineLink({ children, url = '/', link = true }: IUnderlineLink) {
  return (
    <>
      {link ? (
        <a className={s.underlineLink} href={url}>
          {children}
        </a>
      ) : (
        <p className={s.underlineLink}> {children} </p>
      )}
    </>
  );
}
