import Link from "next/link";
import YouCanDesc from "./YouCanDesc";
import YouCanHeading from "./YouCanHeading";

const YouCanWrapper = () => {
  return (
    <div className="basis-full lg:basis-1/2">
      <YouCanHeading />
      <YouCanDesc />
      <Link href="#!">
        <a className="text-xl text-gray underline hover:text-secondary">
          Learn more
        </a>
      </Link>
    </div>
  );
};

export default YouCanWrapper;
