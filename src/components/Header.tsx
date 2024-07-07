import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

function Header() {
  return (
    <Navbar className="shadow">
      <NavbarBrand>
        <p className="font-bold text-inherit cursor-pointer">ADACA EXAM</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="cursor-not-allowed">View</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <p className="font-bold text-inherit cursor-pointer">ADACA EXAM</p>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
