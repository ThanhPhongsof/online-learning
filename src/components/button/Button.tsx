import Link from "next/link";
import classNames from "utils/classNames";

type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  href?: string;
  kind: string;
  children: string | JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  className = "min-w-[130px] py-12 px-3",
  type,
  href = "",
  kind = "secondary",
  children,
  ...rest
}: ButtonProps) => {
  let ButtonDefault = "";
  switch (kind) {
    case "primary":
      ButtonDefault = "bg-primary text-white";
      break;
    case "secondary":
      ButtonDefault = "bg-secondary text-white";
      break;
    case "third":
      ButtonDefault = "bg-white text-grayBase";
      break;
    default:
      break;
  }

  if (href) {
    return (
      <Link href={href} {...rest}>
        <a
          className={classNames(
            "font-medium text-base border-none outline-none rounded-full text-center",
            ButtonDefault,
            className
          )}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        "font-medium text-base px-9 py-3 rounded-full",
        ButtonDefault,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
