import classNames from "utils/classNames";

type NewsBoxBageProps = {
  children?: string;
  className?: string;
};

const NewsBoxBage = ({
  children = "News",
  className = "",
}: NewsBoxBageProps) => {
  return (
    <span
      className={classNames(
        "uppercase font-medium text-base py-[2px] px-9 text-primary bg-[#F4C467] rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
};

export default NewsBoxBage;
