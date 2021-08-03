import React from "react";

const explorerUrls = {
	Devnet: "https://dexplorer.ark.io/",
	Mainnet: "https://explorer.ark.io/",
};

const entry = (api) => {
	const App = () => {
		const [selectedLabel, setSelectedLabel] = React.useState("Mainnet");

		return (
			<section className="flex-1 border-t-3 border-theme-danger-500 bg-theme-neutral-200 flex flex-col justify-center">
				<div className="flex items-center justify-center divide-x divide-theme-secondary-600 py-4 shadow-md z-20">
					{["Mainnet", "Devnet"].map((explorerLabel, index) => (
						<button
							key={index}
							className={`px-4 py-2 w-30 ${selectedLabel === explorerLabel ? "font-bold" : ""}`}
							onClick={() => setSelectedLabel(explorerLabel)}
						>
							{explorerLabel}
						</button>
					))}
				</div>

				<webview className="w-full h-full" src={explorerUrls[selectedLabel]} />
			</section>
		);
	};

	api.launch().render(<App />);
};

export default entry;
