type OurFeaturesLayoutProps = {
  children: any;
};

const OurFeaturesLayout = ({ children }: OurFeaturesLayoutProps) => {
  return <div className="basis-full md:basis-1/2">{children}</div>;
};

export default OurFeaturesLayout;
