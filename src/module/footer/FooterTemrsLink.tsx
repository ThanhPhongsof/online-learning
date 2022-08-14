import Link from "next/link";

type FooterTemrsLink = {
  children?: string;
};

const FooterTemrsLink = ({
  children = "Terms & Conditions",
}: FooterTemrsLink) => {
  return (
    <Link href="#!">
      <a className="text-xl text-inherit hover:text-white">{children}</a>
    </Link>
  );
};

export default FooterTemrsLink;
