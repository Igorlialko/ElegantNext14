import s from './ViewSortSelect.module.scss';
import View1 from '@/app/_icons/view/View1';
import View2 from '@/app/_icons/view/View2';
import View3 from '@/app/_icons/view/View3';
import View4 from '@/app/_icons/view/View4';
import { useState } from 'react';
import SortArrow from '@/app/_icons/arrows/SortArrow';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import clsx from 'clsx';
import { TViews, views } from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/views';

interface ViewSortSelect {
  activeView: TViews;
  setActiveView: (view: TViews) => void;
  activeSort?: string;
  setActiveSort: (activeSort: string) => void;
  className?: string;
}

const viewsIcons = [View1, View2, View3, View4];

const categoriesSort: string[] = ['Name', 'Discount', 'Price', 'Popularity', "don't sort"];

const ViewSortSelect = ({
  activeView,
  setActiveView,
  activeSort = '',
  setActiveSort,
  className,
}: ViewSortSelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);
  // todo: add transform rotate to icon arrow
  return (
    <div className={s.wrapViewSort}>
      <ClickAwayListener onClickAway={handleClose}>
        <div className={s.sort}>
          <div className={s.select} onClick={handleOpen}>
            <span className={s.selected}>{activeSort || 'Sort by'}</span>
            <SortArrow />
          </div>
          <ul className={clsx(s.menu, { [s.activeClick]: isOpen })}>
            {categoriesSort.map((item, index) => (
              <li key={item}>
                <div
                  className={s.item}
                  onClick={() => {
                    setActiveSort(categoriesSort.length - 1 === index ? '' : item);
                    handleClose();
                  }}
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ClickAwayListener>

      <div className={clsx(className, s.viewWrap)}>
        {views.map((view, index) => {
          const Icon = viewsIcons[index];
          return (
            <button
              type='button'
              key={view}
              className={clsx(s.view, {
                [s.active]: view === activeView,
              })}
              onClick={() => setActiveView(view)}
            >
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default ViewSortSelect;
