type AllInOneDescProps = {
  children: string;
};

const AllInOneDesc = ({ children }: AllInOneDescProps) => {
  return (
    <p className="text-xs lg:text-lg text-gray block max-w-[14rem] lg:max-w-xs">
      {children}
    </p>
  );
};

export default AllInOneDesc;
