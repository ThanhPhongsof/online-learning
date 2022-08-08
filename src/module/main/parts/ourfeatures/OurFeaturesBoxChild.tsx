type OurFeaturesBoxChildProps = {
  children: JSX.Element;
};

const OurFeaturesBoxChild = ({ children }: OurFeaturesBoxChildProps) => {
  return <div className="max-w-[450px]">{children}</div>;
};

export default OurFeaturesBoxChild;
