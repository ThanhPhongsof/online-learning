import { Button } from "components/button";

const IntegrationsBox = () => {
  return (
    <div className="flex flex-col gap-8  items-start">
      <h5 className="text-purpleLight font-secondary text-xl leading-[27/20] uppercase tracking-widest translate-x-24 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1/2 after:flex after:items-center after:justify-center after:-translate-x-24 after:translate-y-3 after:border after:border-purpleLight after:h-0">
        Integrations
      </h5>
      <h3 className="text-primary font-semibold text-xl lg:text-2xl w-full md:w-[400px]">
        200+ educational tools and platform{" "}
        <span className="text-secondary font-bold font-secondary">
          integrations
        </span>
      </h3>
      <p className="w-full md:w-[420px] xl:w-[540px] break-work">
        Schoology has every tool your classroom needs and comes pre-integrated
        with more than 200+ tools, student information systems (SIS), and
        education platforms.
      </p>
      <Button
        type="button"
        className="bg-white border border-secondary text-secondary"
      >
        See All Integrations
      </Button>
    </div>
  );
};

export default IntegrationsBox;
