import React from "react";

const explorerUrls = {
	"ARK Explorer - APN": "https://explorer.ark.io/",
	"ARK Explorer - APN Devnet": "https://dexplorer.ark.io/",
};

export default (api) => {
	const App = () => {
		const [selectedLabel, setSelectedLabel] = React.useState(
			"ARK Explorer - APN"
		);

		return (
			<section className="flex-1 border-t-3 border-theme-danger-500 bg-theme-neutral-200 flex flex-col justify-center">
				<div className="flex items-center justify-center divide-x divide-theme-secondary-600 py-4 shadow-md z-20">
					{Object.keys(explorerUrls).map((explorerLabel) => (
						<button
							className={`px-4 py-2 ${selectedLabel === explorerLabel ? 'font-bold' : ''}`}
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
