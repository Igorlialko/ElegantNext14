import { usePathname, useRouter } from '@/navigation';
import { locales, TLocale } from '@/config';
import { useLocale } from 'next-intl';

const LocalSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = (nextLocale: TLocale) => () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <div>Active locale:{locale}</div>
      {locales.map((localeItem) => (
        <button
          onClick={handleSwitch(localeItem)}
          key={localeItem}
          style={{ background: localeItem === locale ? 'green' : '#af0000' }}
        >
          {localeItem}
        </button>
      ))}
    </div>
  );
};

export default LocalSwitcher;
