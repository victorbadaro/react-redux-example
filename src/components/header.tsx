export function Header() {
	return (
		<header className="flex items-center h-20 bg-zinc-950 text-zinc-100">
			<nav className="flex justify-between items-center mx-auto w-11/12">
				<span className="text-2xl">React Redux Example</span>
				<button type="button" className="px-4 h-10 rounded-lg text-sm font-semibold bg-lime-400 text-lime-950 hover:bg-lime-500 transition-colors">New Item</button>
			</nav>
		</header>
	);
}
