export function Header() {
	return (
		<header className="flex justify-between py-4 px-8 bg-zinc-950 text-zinc-100">
			<span className="text-2xl">React Redux Example</span>
			<button type="button" className="py-1 px-2 rounded text-sm font-semibold bg-lime-400 text-lime-900 hover:opacity-80 transition">New Item</button>
		</header>
	);
}
