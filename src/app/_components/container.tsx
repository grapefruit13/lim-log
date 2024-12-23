import cn from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={cn('mx-auto w-full', className)}>{children}</div>;
};

export default Container;
