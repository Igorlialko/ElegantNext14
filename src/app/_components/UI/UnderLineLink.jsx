import s from './UnderLink.module.scss';

const UnderLineLink = ({ url, children }) => (
  <>
    <a href={url} className={s.underlineLink}>
      {children}
    </a>
  </>
);
export default UnderLineLink;
