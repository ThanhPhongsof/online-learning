import classNames from "utils/classNames";

type NewsBoxHeadingProps = {
  children: string;
  className?: string;
};

const NewsBoxHeading = ({ children, className = "" }: NewsBoxHeadingProps) => {
  return (
    <h4 className={classNames("font-medium text-2xl text-primary", className)}>
      {children}
    </h4>
  );
};

export default NewsBoxHeading;
