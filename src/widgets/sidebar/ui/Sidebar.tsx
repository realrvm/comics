import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MenuDecoration } from "@/shared/ui/icons/MenuDecoration";

export const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center max-w-[500px] w-full py-16">
      <h2
        className="text-beige font-vinque text-[48px] uppercase text-center leading-[52px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        The Blood
        <br /> of Azra
      </h2>
      <MenuDecoration />
      <h4 className="text-2xl font-vinque text-center text-light mt-2 mb-4 uppercase">
        Chapters
      </h4>
      <h3 className="text-[32px] font-vinque text-center text-beige uppercase mb-4">
        Arc 1
      </h3>
      <ul className="font-yatra text-light flex flex-col items-center gap-3 text-2xl">
        <li className="hover:text-beige transition duration-300">
          <NavLink
            to="/content/1.0"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-beige" : ""
            }
          >
            Prologue
          </NavLink>
        </li>
        <li className="hover:text-beige transition duration-300">
          <NavLink
            to="/content/1.1.1"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-beige" : ""
            }
          >
            1.1
          </NavLink>
        </li>
        <li className="hover:text-beige transition duration-300">
          <NavLink
            to="/content/1.2.1"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-beige" : ""
            }
          >
            1.2
          </NavLink>
        </li>
        <li className="hover:text-beige transition duration-300">
          <NavLink
            to="/content/1.3.1"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-beige" : ""
            }
          >
            1.3
          </NavLink>
        </li>
        <li className="hover:text-beige transition duration-300">
          <NavLink
            to="/content/1.4.1"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-beige" : ""
            }
          >
            1.4
          </NavLink>
        </li>
        <li>Coming soon</li>
      </ul>
    </div>
  );
};
