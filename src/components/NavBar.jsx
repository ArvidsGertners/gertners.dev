import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonNav } from "./ButtonNav";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-paper border-b-3 border-ink">
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
            <ButtonNav to="/about">about</ButtonNav>
            <ButtonNav to="/projects">projects</ButtonNav>
            <ButtonNav to="/writing">writing</ButtonNav>
            <ButtonSecondary to="/contact">Say Hi</ButtonSecondary>
          </div>
        </div>
      </div>
    </nav>
  );
};
