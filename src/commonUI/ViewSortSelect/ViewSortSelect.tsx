import s from './ViewSortSelect.module.scss';
import View1 from '@/app/_icons/view/View1';
import View2 from '@/app/_icons/view/View2';
import View3 from '@/app/_icons/view/View3';
import View4 from '@/app/_icons/view/View4';
import { useState } from 'react';
import SortArrow from '@/app/_icons/arrows/SortArrow';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import clsx from 'clsx';
import { TViews, views } from '@/commonUI/ViewSortSelect/views';

interface ViewSortSelect {
  categoriesSort: string[];
  getActiveSortCategories: (active: string) => void;
  activeView: TViews;
  setActiveView: (view: TViews) => void;
}

const viewsIcons = [View1, View2, View3, View4];

const ViewSortSelect = ({
  categoriesSort,
  getActiveSortCategories,
  activeView,
  setActiveView,
}: ViewSortSelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //TODO: replace sort by from array sorting
  const [sortActive, setSortActive] = useState<string>('Sort by');
  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);
  const handleSortActive = (active: string) => {
    getActiveSortCategories(active);
    setSortActive(active);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapViewSort}>
      <ClickAwayListener onClickAway={handleClose}>
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
      </ClickAwayListener>

      <div className={s.viewWrap}>
        {views.map((view, index) => {
          const Icon = viewsIcons[index];
          return (
            <div
              key={view}
              className={clsx(s.view, {
                [s.active]: view === activeView,
              })}
              onClick={() => setActiveView(view)}
            >
              <Icon />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ViewSortSelect;
