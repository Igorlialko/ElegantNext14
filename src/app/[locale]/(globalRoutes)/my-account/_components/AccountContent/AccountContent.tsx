import s from './accountContent.module.scss';
import FormDetails from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountContent/components/FormDetails/FormDetails';

export default function AccountContent() {
  return (
    <>
      <FormDetails className={s.form} />
    </>
  );
}
