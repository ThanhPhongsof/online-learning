import { Button } from "components/button";
import classNames from "utils/classNames";

type SkillineImageProps = {
  label: string;
  kind: string;
  textButton: string;
  background: string;
};

const SkillineImage = ({
  label,
  kind = "default",
  textButton,
  background = "bg-[url('../images/skilline-img-1.png')]",
}: SkillineImageProps) => {
  if (!background) return null;

  let ButtonBG =
    kind === "default" ? "border border-white bg-transparent" : "bg-thỉrd";

  return (
    <div
      className={classNames(
        "bg-cover bg-no-repeat bg-center w-[300px] h-[200px] md:w-[345px] md:h-[300px] xl:w-[500px] xl:h-[400px] outline-none flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl",
        background
      )}
    >
      <span className="font-semibold text-white text-xl md:text-3xl uppercase">
        {label}
      </span>
      <Button
        className={classNames(
          "text-white text-sm md:text-lg font-medium",
          ButtonBG
        )}
      >
        {textButton}
      </Button>
    </div>
  );
};

export default SkillineImage;
