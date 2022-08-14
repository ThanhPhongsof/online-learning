type AllInOneHeadingProps = {
  children: string;
};

const AllInOneHeading = ({ children }: AllInOneHeadingProps) => {
  return (
    <h4 className="text-sm lg:text-xl text-primary font-medium mb-2 lg:mb-5 max-w-[10rem] lg:max-w-[14rem]">
      {children}
    </h4>
  );
};

export default AllInOneHeading;
