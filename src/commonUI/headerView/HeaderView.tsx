import s from './headerView.module.scss';
import View1 from '@/app/_icons/view/View1';
import View2 from '@/app/_icons/view/View2';
import View3 from '@/app/_icons/view/View3';
import clsx from 'clsx';
import React from 'react';
import View4 from '@/app/_icons/view/View4';

function HeaderView({
  view,
  nameCategories,
  className,
  onClick,
}: {
  view: string;
  nameCategories?: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <div className={clsx(s.flexWrap, className)}>
      {nameCategories ? <div className={s.title}>{nameCategories}</div> : undefined}
      <div className={s.sort}>
        <select>
          <option value=''>Sort by</option>
          <option value='date'>Data</option>
          <option value='sum'>Sum</option>
        </select>
      </div>
      <div className={s.viewWrap}>
        <button type='button' value='all' className={s.view} onClick={(e) => onClick(e)}>
          <View1 fill={view === 'all' ? '#141718' : '#6C7275'} />
        </button>
        <button type='button' value='card' className={s.view} onClick={(e) => onClick(e)}>
          <View2 fill={view === 'card' ? '#141718' : '#6C7275'} />
        </button>
        <button
          type='button'
          value='cardDescriptionColumn'
          className={s.view}
          onClick={(e) => onClick(e)}
        >
          <View3 fill={view === 'cardDescriptionColumn' ? '#141718' : '#6C7275'} />
        </button>
        <button
          type='button'
          value='cardDescriptionRow'
          className={s.view}
          onClick={(e) => onClick(e)}
        >
          <View4 fill={view === 'cardDescriptionRow' ? '#141718' : '#6C7275'} />
        </button>
      </div>
    </div>
  );
}

export default HeaderView;
