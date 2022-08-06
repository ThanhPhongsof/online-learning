import { Button } from "components/button";
import Link from "next/link";
import React, { useEffect } from "react";

type SideBarProps = {
  showSideBar: boolean;
};

const SideBar = React.forwardRef(
  ({ showSideBar }: SideBarProps, ref: React.LegacyRef<HTMLUListElement>) => {
    const expandClass = "is-expand";

    useEffect(() => {
      const sideBar = document.querySelector(".header-sidebar");
      if (showSideBar) {
        sideBar?.classList.add(expandClass);
      } else {
        sideBar?.classList.remove(expandClass);
      }
    }, [showSideBar]);

    return (
      <ul className="header-sidebar" ref={ref}>
        <li>
          <Link href="#!" className="header-sidebar-link">
            <a href="">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#!" className="header-sidebar-link">
            <a href="">Careers</a>
          </Link>
        </li>
        <li>
          <Link href="#!" className="header-sidebar-link">
            <a href="">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="#!" className="header-sidebar-link">
            <a href="">Contact Us</a>
          </Link>
        </li>
        <li>
          <Button type="button" to="#!" kind="third">
            Login
          </Button>
        </li>
        <li>
          <Button type="button" to="#!">
            Sign Up
          </Button>
        </li>
      </ul>
    );
  }
);

export default SideBar;
