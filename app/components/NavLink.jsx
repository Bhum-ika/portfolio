import Link from "next/link"
const NavLink=({href,title})=>{
    return(
        <Link href={href} 
        className='block py-2 pl-3 pr-4 sm:text-[#ADB7BE] text-[#4a083e] sm:text-xl rounded md:p-0 hover:text-white'>
           {title}</Link>
    )
}
export default NavLink;