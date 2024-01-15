import s from './steps.module.scss';

interface Isteps {
  steps: { name: string; number: number; active: boolean }[];
}

export default function Steps({ steps }: Isteps) {
  return (
    <ul className={s.steps}>
      {steps.map((step) => {
        return (
          <li key={step.number} className={step.active ? s.activeStep : undefined}>
            <span>{step.number}</span>
            {step.name}
          </li>
        );
      })}
    </ul>
  );
}
