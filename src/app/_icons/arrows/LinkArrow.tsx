const LinkArrow = ({ className }: { className?: string }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M4.16602 10H15.8327'
      stroke='#141718'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.834 15L15.834 10'
      stroke='#141718'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.834 5L15.834 10'
      stroke='#141718'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default LinkArrow;
