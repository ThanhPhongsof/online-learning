import { Button } from "components/button";

const FooterEmail = () => {
  return (
    <form
      className="flex flex-col md:flex-row items-center gap-5  mb-16 md:mb-24"
      autoComplete="off"
    >
      <input
        className="text-white placeholder:text-purpleLightest text-xl bg-transparent border border-purpleLightest rounded-full pl-8 py-4"
        placeholder="Your Email"
      ></input>
      <Button
        type="submit"
        className="bg-gradient-to-r from-[#545AE7] to-[#393FCF] text-white !py-4 !px-8 !text-xl w-full"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default FooterEmail;
