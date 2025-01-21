import Button from "./Button";

interface NavLinks {
  name: string;
  url: string;
}

const navLinks: NavLinks[] = [
  { name: "Home", url: "/dashboard" },
  { name: "Features", url: "/" },
  { name: "Events", url: "/events" },
  { name: "Contact", url: "/contact" },
];

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-[10%] flex justify-between place-items-center px-10 py-4 text-black text-2xl border-b-[3px] border-black">
        <div className="flex justify-start place-items-center gap-40">
          <a className="text-5xl font-medium" href="/">
            TheElf
          </a>
          <div className="flex gap-5">
            {navLinks.map((link) => (
              <a
                className="font-extralight text-secondary-300"
                href={link.url}
                key={link.url}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <Button
          text="Get Started"
          bg="bg-primary-100"
          px="2.3rem"
          py="0.8rem"
        />
      </nav>
    </>
  );
};

export default NavBar;
