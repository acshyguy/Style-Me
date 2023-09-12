import React from "react";
import Logo from "../assets/icons/headerLogo.svg";
import { Link } from "react-router-dom";
// import { Bars3Icon } from "heroicons";

const Navbar = () => {
	return (
		<div className="bg-[#FFF] w-full py-4  h-[90px] flex items-center justify-around">
			<div className="flex items-center gap-3">
				<img src={Logo} alt="" className="h-[60px] w-[50px]" />
				<h2 className="text-2xl font-bold">StyleMe</h2>
			</div>
			<div className="hidden lg:block">
				<Link className="mr-5" to="/">
					Home
				</Link>
				<Link className="mr-5" to="/">
					Features
				</Link>
				<Link className="mr-5" to="/">
					About
				</Link>
				{/* <Link className="mr-5" to="/">
					About
				</Link> */}
			</div>
			<div className="hidden lg:flex gap-4">
				<button className="text-[#FCA311] bg-white px-6 py-2 border border-[#14213D] rounded-md hover:bg-[#0b0b0b]">
					Login
				</button>
				<button className="text-[#FCA311] bg-[#14213D] px-6 py-2 border border-[#14213D] rounded-md">
					Register
				</button>
			</div>
			<div className=" lg:hidden">
				<button className="text-[#FCA311] bg-[#14213D] px-6 py-2 border border-[#14213D] rounded-md hover:bg-[#0b0b0b]" >
					Mobile Button
				</button>
			</div>
		</div>
	);
};

export default Navbar;
