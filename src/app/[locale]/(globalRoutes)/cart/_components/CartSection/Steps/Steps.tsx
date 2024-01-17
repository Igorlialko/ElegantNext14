import s from './steps.module.scss';
import Complete from '@/app/_icons/Complete';

interface Isteps {
  steps: { name: string; number: number; active: boolean; complete: boolean }[];
}

export default function Steps({ steps }: Isteps) {
  return (
    <ul className={s.steps}>
      {steps.map((step) => {
        return (
          <li
            key={step.number}
            className={step.active ? s.activeStep : step.complete ? s.completeStep : undefined}
          >
            <span>{step.active ? step.number : step.complete ? <Complete /> : step.number}</span>
            {step.name}
          </li>
        );
      })}
    </ul>
  );
}
