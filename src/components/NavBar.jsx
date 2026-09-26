import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonNav } from "./ButtonNav";
import { Squash as Hamburger } from "hamburger-react";
import { Drawer } from "@base-ui/react/drawer";

const links = [
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/writing", label: "writing" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <nav className="relative z-50 bg-paper border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          <div className="shrink-0">
            <Link
              to="/"
              className="text-ink text-heading-m font-display font-semibold"
            >
              gertners.dev
            </Link>
          </div>
          <div className="hidden md:flex ml-10 items-baseline gap-16 uppercase text-label font-mono">
            {links.map((l) => (
              <ButtonNav key={l.to} to={l.to}>
                {l.label}
              </ButtonNav>
            ))}
            <ButtonSecondary to="/contact">Say Hi</ButtonSecondary>
          </div>

          <div className="md:hidden border-3 border-ink text-ink shadow-brutal">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              duration={0.2}
              label={isOpen ? "Close menu" : "Open menu"}
              hideOutline={false}
            />
          </div>
        </div>
      </div>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen} swipeDirection="up">
        <Drawer.Portal>
          <Drawer.Backdrop
            className="fixed inset-x-0 bottom-0 top-24.75 bg-ink/40
                 opacity-[calc(1-var(--drawer-swipe-progress))]
                 transition-opacity duration-300
                 data-starting-style:opacity-0 data-ending-style:opacity-0 data-swiping:duration-0"
          />
          <Drawer.Viewport className="fixed inset-x-0 bottom-0 top-24.75 flex flex-col">
            <Drawer.Popup
              className="w-full bg-paper border-b-3 border-ink px-4 py-8 outline-none
                   transform-[translateY(var(--drawer-swipe-movement-y))]
                   transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                   data-starting-style:transform-[translateY(-100%)]
                   data-ending-style:transform-[translateY(-100%)]
                   data-swiping:select-none"
            >
              <Drawer.Content>
                <Drawer.Title className="sr-only">Menu</Drawer.Title>
                <div className="flex flex-col items-start gap-6 uppercase text-label font-mono">
                  {links.map((l) => (
                    <ButtonNav key={l.to} to={l.to}>
                      {l.label}
                    </ButtonNav>
                  ))}
                  <ButtonSecondary to="/contact">Say Hi</ButtonSecondary>
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
};
