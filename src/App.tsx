import { useMemo, useState } from "react"
import bgPattern from "./assets/svgs/bg-pattern.svg"
import patternCircles from "./assets/svgs/pattern-circles.svg"
import checkIcon from "./assets/svgs/icon-check.svg"

type PricingTier = {
	pageviews: number
	monthlyPrice: number
}

const pricingTiers: PricingTier[] = [
	{
		pageviews: 10000,
		monthlyPrice: 8,
	},
	{
		pageviews: 50000,
		monthlyPrice: 12,
	},
	{
		pageviews: 100000,
		monthlyPrice: 16,
	},
	{
		pageviews: 500000,
		monthlyPrice: 24,
	},
	{
		pageviews: 1000000,
		monthlyPrice: 36,
	},
]

const App: React.FC = () => {
	const [sliderValue, setSliderValue] = useState(2)
	const [isYearly, setIsYearly] = useState(false)

	const currentTier = pricingTiers[sliderValue]
	const price = isYearly
		? currentTier.monthlyPrice * 0.75
		: currentTier.monthlyPrice

	const formatPageviews = useMemo(
		() => (pageviews: number) => {
			return pageviews >= 1000000
				? `${pageviews / 1000000}M`
				: pageviews >= 1000
				? `${pageviews / 1000}K`
				: pageviews.toString()
		},
		[],
	)

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<img
				className="-z-10 absolute top-0 left-0 w-full h-auto max-w-full"
				src={bgPattern}
				alt="Background Pattern"
			/>
			<div className="text-center mb-[92px] relative">
				<img
					className="absolute top-0 left-1/2 transform -translate-x-1/2 "
					src={patternCircles}
					alt="Pattern Circles"
				/>
				<h1 className="text-xl font-extrabold text-neutral-600">
					Simple, traffic-based pricing
				</h1>
				<p>
					Sign-up for our 30-day trial.{" "}
					<span className="">No credit card required.</span>
				</p>
			</div>

			<div className="bg-neutral-100 mb-4 w-full max-w-xl rounded-xl shadow-md p-10 mx-auto">
				<div className="flex justify-between items-center mb-12">
					<span className="font-extrabold uppercase tracking-widest">
						{formatPageviews(currentTier.pageviews)} Pageviews
					</span>

					<span className="flex items-center gap-2">
						<span className="font-extrabold text-neutral-600 text-xl">
							${price.toFixed(2)}
						</span>
						/ {isYearly ? "year" : "month"}
					</span>
				</div>
				<input
					type="range"
					min="0"
					max="4"
					value={sliderValue}
					onChange={(e) => setSliderValue(parseInt(e.target.value))}
					className="slider w-full mb-12 h-2 [&::-webkit-slider-runnable-track]:bg-primary-soft-cyan [&::-webkit-slider-thumb]:cursor-pointer"
				/>
				<div className="flex justify-end items-center gap-4">
					<span>Monthly Billing</span>
					<button
						onClick={() => setIsYearly(!isYearly)}
						className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors hover:bg-primary-soft-cyan ${
							isYearly ? "bg-primary-strong-cyan" : "bg-neutral-400"
						}`}
						role="switch"
						aria-checked={isYearly}
					>
						<span
							className={`${
								isYearly ? "translate-x-6" : "translate-x-1"
							} inline-block h-4 w-4 transform rounded-full bg-neutral-100 transition-transform`}
						/>
					</button>
					<span className="flex gap-2 items-center">
						Yearly Billing{" "}
						<span className="hidden md:block bg-primary-light-grayish-red py-1 px-2 rounded-full text-primary-light-red">
							25% discount
						</span>
						<span className="md:hidden bg-primary-light-grayish-red text-primary-light-red py-1 px-2 rounded-full">
							-25%
						</span>
					</span>
				</div>

				<hr className=" my-8" />

				<div className="md:flex md:items-center md:justify-between">
					<ul className="flex flex-col gap-2 items-center md:items-start">
						<li className="flex items-center gap-4">
							<img
								src={checkIcon}
								alt=""
							/>
							Unlimited websites
						</li>
						<li className="flex items-center gap-4">
							<img
								src={checkIcon}
								alt=""
							/>
							100% data ownership
						</li>
						<li className="flex items-center gap-4">
							<img
								src={checkIcon}
								alt=""
							/>
							Email reports
						</li>
					</ul>

					<button className="h-12 w-52 font-extrabold rounded-full bg-neutral-600 text-primary-pale-blue">
						Start my trial
					</button>
				</div>
			</div>
			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">Pradeep Kaswan</a>.
			</div>
		</div>
	)
}

export default App
