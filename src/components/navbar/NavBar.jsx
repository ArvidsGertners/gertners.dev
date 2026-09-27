import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ButtonSecondary } from "../ui/ButtonSecondary";
import { ButtonPrimary } from "../ui/ButtonPrimary";

import { ButtonNav } from "./ButtonNav";
import { Squash as Hamburger } from "hamburger-react";
import { Drawer } from "@base-ui/react/drawer";
import { DrawerItem } from "./DrawerItem";

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
    <nav className="relative z-50 h-nav bg-paper border-b-3 border-ink">
      <div className="h-full">
        <div className="flex h-full items-center justify-between py-6 p-12 lg:px-24 ">
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
          <Drawer.Viewport className="fixed inset-x-0 bottom-0 top-nav flex flex-col">
            <Drawer.Popup
              className="flex-1 w-full overflow-y-auto overscroll-contain bg-paper border-ink px-4 py-8 outline-none
                   transform-[translateY(var(--drawer-swipe-movement-y))]
                   transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                   data-starting-style:transform-[translateY(-100%)]
                   data-ending-style:transform-[translateY(-100%)]
                   data-swiping:select-none"
            >
              <Drawer.Content className="flex flex-col">
                <Drawer.Title className="sr-only">Menu</Drawer.Title>
                {[...links].map((l, i) => (
                  <DrawerItem key={l.to} to={l.to} index={i + 1}>
                    {l.label.charAt(0).toUpperCase() + l.label.slice(1)}
                  </DrawerItem>
                ))}
                <div className="mt-8 flex flex-col">
                  <ButtonPrimary to="/contact">
                    <span>say hi</span>
                    <svg
                      className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200
                   group-hover:translate-x-1 motion-reduce:transition-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M3 12h17M13 5l7 7-7 7" />
                    </svg>
                  </ButtonPrimary>
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
};
