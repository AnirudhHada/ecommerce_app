import React from "react";
import Slider from "react-slick";

const TestimonialData = [
	{
		id: 1,
		name: "Victor",
		text: "Zayra is an outstanding app! It's easy to use, fast, and offers a seamless shopping experience with great deals",
		img: "https://picsum.photos/101/101",
	},
	{
		id: 2,
		name: "Satya Nadella",
		text: "Zayra showcases remarkable innovation, seamless design, and a user-first approach. It sets a new standard for modern e-commerce platforms.",
		img: "https://picsum.photos/102/102",
	},
	{
		id: 3,
		name: "Virat Kohli",
		text: "Zayra is a fantastic platform! Smooth, intuitive, and packed with great features. It's my go-to app for online shopping.",
		img: "https://picsum.photos/104/104",
	},
	{
		id: 4,
		name: "Elon Musk",
		text: "Zayra is an exceptional e-commerce app with cutting-edge technology and seamless user experience. Truly ahead of its time.",
		img: "https://picsum.photos/536/354",
	},
	{
		id: 4,
		name: "Sachin Tendulkar",
		text: "Zayra offers an exceptional shopping experience! Its intuitive design, fast performance, and great deals make it a champion in e-commerce.",
		img: "https://picsum.photos/103/103",
	},
];

const Testimonials = () => {
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="py-10 mb-10">
			<div className="container">
				{/* Header Section */}
				<div className="text-center  mb-10 max-w-[600px] mx-auto">
					<p data-aos="fade-up" className="text-sm text-primary">
						What our customers are saying
					</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Testimonials
					</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Showcase customer reviews, highlighting positive experiences and
						building trust in our products.
					</p>
				</div>

				{/* Testimonial Cards */}
				<div data-aos="zoom-in">
					<Slider {...settings}>
						{TestimonialData.map((data) => (
							<div className="my-6">
								<div
									key={data.id}
									className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
								>
									<div className="mb-4">
										<img
											src={data.img}
											alt=""
											className="rounded-full w-20 h-20"
										/>
									</div>
									<div className="flex flex-col items-center gap-4">
										<div className="space-y-3">
											<p className="text-xs dark:text-slate-300 text-gray-500">
												{data.text}
											</p>
											<h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
												{data.name}
											</h1>
										</div>
									</div>
									<p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
