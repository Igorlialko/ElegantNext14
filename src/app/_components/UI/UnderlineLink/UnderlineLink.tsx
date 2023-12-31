import s from './underlineLink.module.scss';

export default function UnderlineLink({
  children,
  url = '/',
  link = true,
}: {
  children: string;
  url?: string;
  link: boolean;
}) {
  return (
    <>
      {link ? (
        <a className={s.underlineLink} href={url}>
          {' '}
          {children}{' '}
        </a>
      ) : (
        <p className={s.underlineLink}> {children} </p>
      )}
    </>
  );
}
