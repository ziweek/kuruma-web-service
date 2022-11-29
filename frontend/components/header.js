import Image from "next/image";
import imgLogoYellow from "../public/images/tabam_logo_yellow.png";
import imgLogoNavy from "../public/images/tabam_logo_navy.png";

export default function Header() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full">
          <div className="container flex flex-wrap items-center justify-center mx-auto pl-2.5">
            <a className="flex items-center justify-center py-2.5">
              <Image
                src={imgLogoNavy}
                className="block dark:hidden"
                alt="Flowbite Logo"
                height={25}
              />
              <Image
                src={imgLogoYellow}
                className="hidden dark:block"
                alt="Flowbite Logo hidden dark:block"
                height={25}
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
