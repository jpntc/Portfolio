import Link from "next/link"

const NavLink = ({href, title}) => {
  return (
    <Link href={href} className="flex flex-col  py-2 pl-3 pr-4 font-bold text-text-dark text-xl md:text-2xl  rounded md:p-0 hover:text-slate-100 ">{title}</Link>
    );
};

export default NavLink;