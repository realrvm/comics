import { FC, useCallback, useState } from "react";

import { Container } from "@/widgets/container";
import { Header } from "@/widgets/header";
import { Drawer } from "@/widgets/drawer/ui/Drawer";
import { MenuDecoration } from "@/shared/ui/icons/MenuDecoration";
import { NavLink } from "react-router-dom";

export const Main: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [drawer, setDrawer] = useState("about");

  const toggleDrawer = useCallback((value: boolean, drawerVal: string) => {
    setIsOpenDrawer(value);
    setDrawer(drawerVal);
  }, []);

  return (
    <>
      <Container>
        <Header toggleDrawer={toggleDrawer} />
      </Container>
      <Drawer isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        {drawer === "about" && (
          <DrawerAboutContent setIsOpenDrawer={setIsOpenDrawer} />
        )}
        {drawer === "contacts" && (
          <DrawerContactsContent setIsOpenDrawer={setIsOpenDrawer} />
        )}
      </Drawer>
    </>
  );
};

const DrawerAboutContent: FC<{ setIsOpenDrawer: (value: boolean) => void }> = ({
  setIsOpenDrawer,
}) => {
  return (
    <div className="font-yatra flex flex-col items-center pb-10">
      <h3 className="text-beige text-3xl !font-vinque">Story</h3>
      <MenuDecoration />
      <p className="text-light text-2xl text-center mb-6 leading-7">
        Wen, a free-spirited soul and an aspiring bard, sets on a journey around
        the continent to find her missing mother. But what starts as a small
        personal family mystery eventually forces her to plunge head deep into
        many grand secrets of the empire: living machines and dead gods,
        innovative science and old magic, royal conspiracies and decades old
        grudges… Just what in the world happened to her mom?
      </p>
      <p className="text-light text-2xl text-center mb-6">
        Comic updates twice a month.
      </p>
      <p className="text-light text-2xl text-center mb-6">
        Content warnings: non-graphic violence, blood, bad language, death,
        child abuse, addiction, discrimination, bullying, artistic nudity.
      </p>
      <p className="text-light text-2xl text-center mb-8">Age rating 14+</p>
      <button
        onClick={() => setIsOpenDrawer(false)}
        className="border border-beige rounded-lg py-3 px-6 md:hidden text-beige text-xl hover:text-light hover:border-light transition duration-300"
      >
        Back
      </button>
    </div>
  );
};

const DrawerContactsContent: FC<{
  setIsOpenDrawer: (value: boolean) => void;
}> = ({ setIsOpenDrawer }) => {
  return (
    <div className="font-yatra flex flex-col items-center">
      <h3 className="text-beige text-3xl !font-vinque">Contacts</h3>
      <MenuDecoration />
      <NavLink
        to="https://twitter.com/honeycakelion"
        className="text-light my-10 hover:text-beige transition duration-300 text-2xl"
        target="_blank"
      >
        TWITTER
      </NavLink>
      <NavLink
        to="https://honeycakelion.tumblr.com/"
        className="text-light mb-10 hover:text-beige transition duration-300 text-2xl"
        target="_blank"
      >
        TUMBLR
      </NavLink>
      <p className="text-light text-2xl text-center mb-6 leading-8">
        If you like my comic, or if you would like to see bonus content (concept
        art, sketches, etc) consider supporting me on
        <p className='py-2'></p>
        <NavLink
          to="https://boosty.to/honeycakelion"
          className="text-light hover:text-beige transition duration-300"
          target="_blank"
        >
          BOOSTY
        </NavLink>
      </p>
      <MenuDecoration />
      <button
        onClick={() => setIsOpenDrawer(false)}
        className="border border-beige rounded-lg py-3 px-6 md:hidden text-beige text-xl mt-8 hover:text-light hover:border-light transition duration-300"
      >
        Back
      </button>
    </div>
  );
};
