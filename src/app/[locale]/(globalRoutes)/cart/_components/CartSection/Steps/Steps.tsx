'use client';

import s from './steps.module.scss';
import Complete from '@/app/_icons/Complete';
import { usePathname } from '@/navigation';
import { stepsArray } from '@/app/[locale]/(globalRoutes)/cart/_components/CartSection/stepsData';
import clsx from 'clsx';

export default function Steps() {
  const pathname = usePathname();

  const activeElementIndex = stepsArray.findIndex((item) => item.url === pathname);

  return (
    <ul className={s.steps}>
      {stepsArray.map((step, index) => {
        const isActive = step.url === pathname;
        const isComplete = activeElementIndex > index;
        return (
          <li
            key={step.url}
            className={clsx({
              [s.activeStep]: isActive,
              [s.completeStep]: isComplete,
            })}
          >
            <span>{isComplete ? <Complete /> : index + 1}</span>
            {step.name}
          </li>
        );
      })}
    </ul>
  );
}
