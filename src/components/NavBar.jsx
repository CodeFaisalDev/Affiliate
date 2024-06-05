"use client";
import React, { useState } from "react";
import Link from "next/link";

const navlinks = {
  all_finds: {
    name: "All Finds",
    href: "/"
  },
  home_products: {
    name: "Home Products",
    href: "/"
  },
  accessories: {
    name: "Accessories",
    href: "/"
  },
  sports_product: {
    name: "Sports Product",
    href: "/"
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = () => {
    return Object.keys(navlinks).map(key => (
      <li key={key}>
        <Link href={navlinks[key].href}>{navlinks[key].name}</Link>
      </li>
    ));
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">amazonBF</a>
      </div>

      {/* Desktop */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">All Finds</Link>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {renderLinks().filter(link => link.key !== 'all_finds')}
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex-none block md:hidden">
        <button
          className="btn btn-ghost text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg z-50">
            <ul className="menu menu-lg menu-vertical p-2">
              <li>
                <Link href="/">All Finds</Link>
              </li>
              <li>
                <details open>
                  <summary>Categories</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    {renderLinks().filter(link => link.key !== 'all_finds')}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
