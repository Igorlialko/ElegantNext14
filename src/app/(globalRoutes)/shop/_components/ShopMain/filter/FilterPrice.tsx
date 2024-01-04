import s from '@/app/(globalRoutes)/shop/_components/ShopMain/filter/filter.module.scss';
import clsx from 'clsx';

const FilterPrice = ({ filterDataPrice }: { filterDataPrice: (price: number[]) => void }) => {
  const handleCheckboxChange = (price: number[]) => {
    filterDataPrice(price);
  };
  return (
    <div className={s.filterName}>
      <div className={s.filterTitle}>PRICE</div>
      <ul className={s.categoriesListPrice}>
        <li className={s.filterItem}>
          <label htmlFor='all' className={s.filterPrice}>
            All Price
            <input type='checkbox' id='all' />
          </label>
        </li>
        <li className={clsx(s.filterItem)}>
          <label htmlFor='[0, 99]' className={s.filterPrice}>
            $0.00 - 99.99
            <input type='checkbox' id='[0, 99]' onChange={() => handleCheckboxChange([0, 99])} />
          </label>
        </li>

        <li className={s.filterItem}>
          <label htmlFor='[100, 199]' className={s.filterPrice}>
            $100.00 - 199.99
            <input
              type='checkbox'
              id='[100, 199]'
              onChange={() => handleCheckboxChange([100, 199])}
            />
          </label>
        </li>

        <li className={s.filterItem}>
          <label htmlFor='[200, 299]' className={s.filterPrice}>
            $200.00 - 299.99
            <input
              type='checkbox'
              id='[200, 299]'
              onChange={() => handleCheckboxChange([200, 299])}
            />
          </label>
        </li>
        <li className={s.filterItem}>
          <label htmlFor='[300, 399]' className={s.filterPrice}>
            $300.00 - 399.99
            <input
              type='checkbox'
              id='[300, 399]'
              onChange={() => handleCheckboxChange([300, 399])}
            />
          </label>
        </li>
        <li className={s.filterItem}>
          <label htmlFor='[400, Infinity]' className={s.filterPrice}>
            $400.00+
            <input
              type='checkbox'
              id='[400, Infinity]'
              onChange={() => handleCheckboxChange([400, Infinity])}
            />
          </label>
        </li>
      </ul>
    </div>
  );
};
export default FilterPrice;
