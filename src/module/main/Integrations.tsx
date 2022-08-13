import { LayoutContainer } from "components/layout";
import Image from "next/image";
import { IntegrationsBox, IntegrationsSocial } from "./parts/integrations";

const Integrations = () => {
  return (
    <section className="integrations">
      <LayoutContainer>
        <div className="flex flex-col items-center lg:flex-row gap-20">
          <div className="basis-1/2">
            <IntegrationsSocial />
          </div>
          <div className="basis-1/2">
            <IntegrationsBox />
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Integrations;
