"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "manage orders", href: "/dashboard/manage_orders" },
];

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="navbar bg-white text-slate-900 px-5 xl:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Dropdown button for small screens */}
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.label} className="hover:text-primary">
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-primary" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Image src={logo} width={60} height={50} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.label} className="hover:text-primary duration-300">
              <Link
                key={link.label}
                href={link.href}
                className={pathname === link.href ? "text-primary" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeSwitcher />
        <Link href={"/cart"}>
          <IoCartOutline className="hidden sm:block text-2xl" />
        </Link>
        <IoSearchSharp className="hidden sm:block text-2xl" />
        {session?.status === "loading" && (
          <div className="skeleton h-12 w-12 shrink-0 rounded-full" />
        )}
        {session?.data ? (
          <div className="flex items-center gap-2">
            <Image
              src={session?.data?.user?.image ? session?.data?.user?.image : ""}
              width={50}
              height={50}
              alt="profile pic"
              className="rounded-full"
            />
            <button
              className="btn btn-primary btn-outline"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button className="btn btn-primary btn-outline">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
        {/* <button className="btn btn-primary btn-outline">Appointment</button> */}
      </div>
    </div>
  );
};

export default Navbar;
