import s from './HeaderTitle.module.scss';

function HeaderTitle() {
  return (
    <div className={s.titleWrap}>
      <h3 className={s.title}>
        Simply Unique<span>/</span> Simply Better<span>.</span>
      </h3>
      <div className={s.subTitle}>
        <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </div>
    </div>
  );
}

export default HeaderTitle;
