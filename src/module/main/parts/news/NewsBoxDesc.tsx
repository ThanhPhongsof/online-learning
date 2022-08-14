import classNames from "utils/classNames";

type NewsBoxDescProps = {
  children: string;
  className?: string;
};

const NewsBoxDesc = ({ children, className = "text-lg" }: NewsBoxDescProps) => {
  return <p className={classNames("text-gray", className)}>{children}</p>;
};

export default NewsBoxDesc;
