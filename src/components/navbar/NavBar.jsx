import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { ButtonSecondary } from "../ui/ButtonSecondary";
import { ButtonPrimary } from "../ui/ButtonPrimary";
import { ArrowIcon } from "../ui/ArrowIcon";
import { IllustrationSlot } from "../ui/IllustrationSlot";

import { ButtonNav } from "./ButtonNav";
import { Squash as Hamburger } from "hamburger-react";
import { Drawer } from "@base-ui/react/drawer";
import { DrawerItem } from "./DrawerItem";

// "Say hi" is the contact link, so contact isn't listed here.
const links = [
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/writing", label: "writing" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const burgerRef = useRef(null);
  // Where to go once the drawer has finished closing. Navigating while it is
  // open would be undone: the scroll lock restores the old position on release.
  const pendingTo = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const goTo = (e, to) => {
    e.preventDefault();
    pendingTo.current = to;
    setIsOpen(false);
  };

  const onOpenChangeComplete = (open) => {
    if (open || !pendingTo.current) return;
    navigate(pendingTo.current);
    pendingTo.current = null;
  };

  return (
    <nav className="relative z-50 h-nav bg-paper border-b-3 border-ink">
      <div className="h-full">
        <div className="flex h-full items-center justify-between px-gutter">
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
            <ButtonSecondary to="/#contact">Say Hi</ButtonSecondary>
          </div>

          <div
            ref={burgerRef}
            className="md:hidden border-3 border-ink text-ink shadow-brutal"
          >
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
      {/* Base UI handles Escape, scroll lock and the focus trap. */}
      <Drawer.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        onOpenChangeComplete={onOpenChangeComplete}
        swipeDirection="up"
      >
        <Drawer.Portal>
          <Drawer.Viewport className="fixed inset-x-0 bottom-0 top-nav flex flex-col">
            <Drawer.Popup
              finalFocus={() =>
                burgerRef.current?.querySelector('[role="button"]')
              }
              className="flex-1 w-full overflow-y-auto overscroll-contain bg-paper border-ink px-gutter py-8 outline-none
                   transform-[translateY(var(--drawer-swipe-movement-y))]
                   transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                   data-starting-style:transform-[translateY(-100%)]
                   data-ending-style:transform-[translateY(-100%)]
                   data-swiping:select-none"
            >
              <Drawer.Content className="flex flex-col">
                <Drawer.Title className="sr-only">Menu</Drawer.Title>
                {/* The burger sits outside the focus trap, so give keyboard
                    and screen reader users a close button inside it. */}
                <Drawer.Close className="sr-only focus:not-sr-only focus:mb-4 focus:self-end focus:font-mono focus:text-label focus:uppercase">
                  Close menu
                </Drawer.Close>
                {links.map((l, i) => (
                  <DrawerItem
                    key={l.to}
                    to={l.to}
                    index={i + 1}
                    onClick={(e) => goTo(e, l.to)}
                  >
                    {l.label.charAt(0).toUpperCase() + l.label.slice(1)}
                  </DrawerItem>
                ))}
                <div className="mt-8 flex flex-col gap-3">
                  <ButtonPrimary
                    to="/#contact"
                    onClick={(e) => goTo(e, "/#contact")}
                  >
                    <span>say hi</span>
                    <ArrowIcon />
                  </ButtonPrimary>
                  <p className="font-mono text-meta text-ink-muted">
                    <a href="https://github.com/">GitHub</a> ·{" "}
                    <a href="mailto:hello@gertners.dev">Email</a> ·{" "}
                    <a href="/rss.xml">RSS</a>
                  </p>
                  <IllustrationSlot className="mt-3 h-40 border-3 shadow-brutal-lg" />
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
};
