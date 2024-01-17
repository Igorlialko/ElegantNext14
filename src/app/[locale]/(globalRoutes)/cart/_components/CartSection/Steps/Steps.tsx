import s from './steps.module.scss';
import Complete from '@/app/_icons/Complete';

interface Isteps {
  steps: { name: string; url: string; active: boolean; complete: boolean }[];
}

export default function Steps({ steps }: Isteps) {
  return (
    <ul className={s.steps}>
      {steps.map((step, index) => {
        return (
          <li
            key={step.url}
            className={step.active ? s.activeStep : step.complete ? s.completeStep : undefined}
          >
            <span>{step.active ? index + 1 : step.complete ? <Complete /> : index + 1}</span>
            {step.name}
          </li>
        );
      })}
    </ul>
  );
}
