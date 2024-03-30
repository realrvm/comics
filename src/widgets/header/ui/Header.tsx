import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { MenuDecoration } from "@/shared/ui/icons/MenuDecoration";
import { MOBILE_WIDTH } from "@/shared/lib/constants";

export const Header: FC<{
  toggleDrawer: (val: boolean, drawer: string) => void;
}> = ({ toggleDrawer }) => {
  const { width } = useWindowWidth();

  return (
    <div className="flex h-full flex-col justify-end md:justify-start pb-5 md:pb-0">
      {width > MOBILE_WIDTH ? (
        <>
          <div className="flex items-center gap-8 max-w-[545px] pt-9 mx-auto">
            <MenuDecoration />
            <Title />
            <MenuDecoration />
          </div>
          <Menu toggleDrawer={toggleDrawer} />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <Title />
          <MenuDecoration />
          <Menu toggleDrawer={toggleDrawer} />
          <MenuDecoration />
        </div>
      )}
    </div>
  );
};

export const Title: FC = memo(() => {
  return (
    <div className="text-3xl md:text-5xl text-beige font-vinque text-center uppercase">
      the blood of azra
    </div>
  );
});

export const Menu: FC<{
  toggleDrawer: (val: boolean, drawer: string) => void;
}> = memo(({ toggleDrawer }) => {
  return (
    <div className="flex justify-center md:mt-7 ">
      <ul className="text-light flex flex-col md:flex-row items-center uppercase gap-5 md:gap-8 font-vinque text-2xl">
        <li className="hover:text-beige transition duration-300">
          <NavLink to="/content/1.0">chapters</NavLink>
        </li>
        <li className="hover:text-beige transition duration-300">
          <button
            className="uppercase"
            onClick={() => toggleDrawer(true, "about")}
          >
            About
          </button>
        </li>
        <li className="hover:text-beige transition duration-300">
          <button
            className="uppercase"
            onClick={() => toggleDrawer(true, "contacts")}
          >
            Contacts
          </button>
        </li>
      </ul>
    </div>
  );
});
