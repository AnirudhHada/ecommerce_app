import React from "react";
import Image1 from "../../assets/sliding/women.png";
import Image2 from "../../assets/sliding/shopping.png";
import Image3 from "../../assets/sliding/sale.png";
import Slider from "react-slick";

const ImageList = [
	{
		id: 1,
		img: Image1,
		title: "Upto 75% off on all Men's Wear",
		description:
			"Biggest sale of the season is here! Enjoy a massive 70% off on all products. From fashion to gadgets, home essentials to accessories, everything is on sale. Don't miss out—shop now and save big. Limited time only!",
	},
	{
		id: 2,
		img: Image2,
		title: "30% off on all Women's Wear",
		description:
			"Elevate your style with our exclusive offer! Enjoy 30% off on all Women's Wear. From elegant dresses to chic tops and trendy accessories, find your perfect look. Shop now and embrace fashion at irresistible prices. Limited time only!",
	},
	{
		id: 3,
		img: Image3,
		title: "70% off on all Products Sale",
		description:
			"Unbeatable deal! Get up to 75% off on all Men's Wear. From stylish jackets to trendy shirts, upgrade your wardrobe without breaking the bank. Don't wait—offer valid for a limited time. Shop your favorites now!",
	},
];

const Sliding = ({ handleOrderPopup }) => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "ease-in-out",
		pauseOnHover: false,
		pauseOnFocus: true,
	};

	return (
		<div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
			{/* Background Pattern */}
			<div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

			{/* Sliding Section */}
			<div className="container pb-8 sm:pb-0">
				<Slider {...settings}>
					{ImageList.map((data) => (
						<div>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								{/* Text Content Section */}
								<div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
									<h1
										data-aos="zoom-out"
										data-aos-duration="500"
										data-aos-once="true"
										className="text-5xl sm:text-6xl lg:text-7xl font-bold"
									>
										{data.title}
									</h1>
									<p
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-delay="100"
										className="text-sm"
									>
										{data.description}
									</p>
									<div
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-delay="300"
									>
										<button
											onClick={handleOrderPopup}
											className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
										>
											Order Now
										</button>
									</div>
								</div>

								{/* Image Section */}
								<div className="order-1 sm:order-2">
									<div
										data-aos="zoom-in"
										data-aos-once="true"
										className="relative z-10"
									>
										<img
											src={data.img}
											alt=""
											className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Sliding;
