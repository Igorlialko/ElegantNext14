import s from './filter.module.scss';
import clsx from 'clsx';
import FilterIcon from '@/app/_icons/FilterIcon';
import FilterPrice from '@/app/_components/ShopMain/filter/FilterPrice';

interface Filter {
  filterDataType: (type: string) => void;
  active: string;
  filterDataPrice: (type: number[]) => void;
  setNameFilterCategories: (type: string) => void;
}
function Filter({ filterDataType, active, filterDataPrice, setNameFilterCategories }: Filter) {
  const activeCategories = (type: string, title: string) => {
    filterDataType(type);
    setNameFilterCategories(title);
  };

  return (
    <div className={s.filterWrap}>
      <div className={s.title}>
        <FilterIcon />
        <span>Filter</span>
      </div>
      <div className={s.filterName}>
        <div className={s.filterTitle}>CATEGORIES</div>
        <ul className={s.categoriesList}>
          <li className={clsx(s.filterItem, active === 'all' && s.itemActive)}>
            <div onClick={() => activeCategories('all', 'All Rooms')}>All Rooms</div>
          </li>
          <li className={clsx(s.filterItem, active === 'LivingRoom' && s.itemActive)}>
            <div onClick={() => activeCategories('LivingRoom', 'Living Room')}>Living Room</div>
          </li>
          <li className={clsx(s.filterItem, active === 'Bedroom' && s.itemActive)}>
            <div onClick={() => activeCategories('Bedroom', 'Bedroom')}>Bedroom</div>
          </li>
          <li className={clsx(s.filterItem, active === 'Kitchen' && s.itemActive)}>
            <div onClick={() => activeCategories('Kitchen', 'Kitchen')}>Kitchen</div>
          </li>
          <li className={clsx(s.filterItem, active === 'Bathroom' && s.itemActive)}>
            <div onClick={() => activeCategories('Bathroom', 'Bathroom')}>Bathroom</div>
          </li>
          <li className={clsx(s.filterItem, active === 'Dinning' && s.itemActive)}>
            <div onClick={() => activeCategories('Dinning', 'Dinning')}>Dinning</div>
          </li>
          <li className={clsx(s.filterItem, active === 'Outdoor' && s.itemActive)}>
            <div onClick={() => activeCategories('Outdoor', 'Outdoor')}>Outdoor</div>
          </li>
        </ul>
      </div>
      <FilterPrice filterDataPrice={filterDataPrice} />
    </div>
  );
}

export default Filter;
