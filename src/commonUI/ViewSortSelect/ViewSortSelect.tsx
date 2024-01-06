import s from './ViewSortSelect.module.scss';
import View1 from '@/app/_icons/view/View1';
import View2 from '@/app/_icons/view/View2';
import View3 from '@/app/_icons/view/View3';
import View4 from '@/app/_icons/view/View4';
import { useState } from 'react';
import SortArrow from '@/app/_icons/arrows/SortArrow';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import clsx from 'clsx';

interface ViewSortSelect {
  categoriesSort: string[];
  getActiveSortCategories: (active: string) => void;
  getActiveView: (view: string) => void;
}

const ViewSortSelect = ({
  categoriesSort,
  getActiveSortCategories,
  getActiveView,
}: ViewSortSelect) => {
  const [view, setView] = useState<string>('all');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortActive, setSortActive] = useState<string>('Sort by');
  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);
  const handleSortActive = (active: string) => {
    getActiveSortCategories(active);
    setSortActive(active);
    setIsOpen(false);
  };
  const handleView = (view: string) => {
    setView(view);
    getActiveView(view);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={s.wrapViewSort}>
        <div className={s.sort}>
          <div className={s.select} onClick={handleOpen}>
            <span className={s.selected}>{sortActive}</span>
            <SortArrow />
          </div>
          <ul className={clsx(s.menu, { [s.activeClick]: isOpen })}>
            {categoriesSort.map((item, index) => (
              <li key={item}>
                <div
                  className={s.item}
                  onClick={() =>
                    handleSortActive(categoriesSort.length - 1 === index ? 'Sort by' : item)
                  }
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.viewWrap}>
          <div className={s.view} onClick={() => handleView('all')}>
            <View1 fill={view === 'all' ? '#141718' : '#6C7275'} />
          </div>
          <div className={s.view} onClick={() => handleView('cardBig')}>
            <View2 fill={view === 'cardBig' ? '#141718' : '#6C7275'} />
          </div>
          <div className={s.view} onClick={() => handleView('cardDescription')}>
            <View3 fill={view === 'cardDescription' ? '#141718' : '#6C7275'} />
          </div>
          <div className={s.view} onClick={() => handleView('cardDescriptionHorizontalOne')}>
            <View4 fill={view === 'cardDescriptionHorizontalOne' ? '#141718' : '#6C7275'} />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
export default ViewSortSelect;
