import { SVGProps } from 'react';

const ArrowUpRight = ({ width, height, color, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M7 7h10v10'></path>
      <path d='M7 17 17 7'></path>
    </svg>
  );
};

export default ArrowUpRight;
