import classNames from "utils/classNames";

type AllInOneIconProps = {
  iconColor: string;
  children: JSX.Element;
};

const AllInOneIcon = ({ iconColor, children }: AllInOneIconProps) => {
  return (
    <div
      className={classNames(
        "w-[100px] h-[100px] rounded-full flex justify-center items-center -translate-y-1/2",
        iconColor
      )}
    >
      {children}
    </div>
  );
};

export default AllInOneIcon;
