import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
	{
		title: "Home",
		link: "/#",
	},
	{
		title: "About",
		link: "/#about",
	},
	{
		title: "Contact",
		link: "/#contact",
	},
	{
		title: "Blog",
		link: "/#blog",
	},
];

const Footer = () => {
	return (
		<div className="text-white bg-[#212529]">
			<div className="container">
				<div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
					{/* Company Details */}
					<div className="py-8 px-4">
						<h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
							<FiShoppingBag size="30" />
							Zayra
						</h1>
						<p>
							Zayra offers a seamless shopping experience with a wide variety of
							products, secure payments, and fast delivery.
						</p>
					</div>

					{/* Footer Links */}
					<div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
						<div>
							<div className="py-8 px-4">
								<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
									Important Links
								</h1>
								<ul className="flex flex-col gap-3">
									{FooterLinks.map((link) => (
										<li
											className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
											key={link.title}
										>
											<span>{link.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<div className="py-8 px-4">
								<h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
									Links
								</h1>
								<ul className="flex flex-col gap-3">
									{FooterLinks.map((link) => (
										<li
											className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
											key={link.title}
										>
											<span>{link.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<div className="flex items-center gap-3 mt-6">
								<a href="https://www.instagram.com/_anirudh_006/">
									<FaInstagram className="text-3xl" />
								</a>
								<a href="https://www.facebook.com/anirudhhada.520/">
									<FaFacebook className="text-3xl" />
								</a>
								<a href="https://www.linkedin.com/in/anirudh-hada-58160b212/">
									<FaLinkedin className="text-3xl" />
								</a>
							</div>
							<div className="mt-6">
								<div className="flex items-center gap-3">
									<FaMapLocationDot />
									<p>Mumbai, Maharashtra</p>
								</div>
								<div className="flex items-center gap-3 mt-3">
									<IoCall />
									<p>+91-90******81</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
