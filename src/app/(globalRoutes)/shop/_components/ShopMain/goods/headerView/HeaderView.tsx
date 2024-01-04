import s from './headerView.module.scss';
import View1 from '@/app/_icons/view/View1';
import View2 from '@/app/_icons/view/View2';
import View3 from '@/app/_icons/view/View3';
import { useState } from 'react';

function HeaderView({ nameCategories }: { nameCategories: string }) {
  const [view, setView] = useState<string>('all');
  console.log(view);
  return (
    <div className={s.flexWrap}>
      <div className={s.title}>{nameCategories}</div>
      <div className={s.sort}>
        <select>
          <option value=''>Sort by</option>
          <option value='date'>Data</option>
          <option value='sum'>Sum</option>
        </select>
      </div>
      <div className={s.viewWrap}>
        <div className={s.view} onClick={() => setView('all')}>
          <View1 fill={view === 'all' ? '#141718' : '#6C7275'} />
        </div>
        <div className={s.view} onClick={() => setView('card')}>
          <View2 fill={view === 'card' ? '#141718' : '#6C7275'} />
        </div>
        <div className={s.view} onClick={() => setView('cardDescription')}>
          <View3 fill={view === 'cardDescription' ? '#141718' : '#6C7275'} />
        </div>
      </div>
    </div>
  );
}

export default HeaderView;
