"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <nav>
          <ul>
            <li>
              <HoveredLink href="/">Home</HoveredLink>
            </li>
          </ul>
        </nav>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className=" text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Now Playing"
              href="/nowplaying"
              src="/"
              description="A page that displays what I am currently listeing to, in real time. Using the LastFM API."
            />
            <ProductItem
              title="pyPass"
              href="/pypass"
              src="/"
              description="A pyhton based password manager, with a CLI interface."
            />
            <ProductItem
              title="win-hash-grab"
              href="/winhashgrab"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="A python script to retrieve user info and 'SYSTEM'/'SAM' registries, so you can retrieve the user hashed password."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Profile</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
