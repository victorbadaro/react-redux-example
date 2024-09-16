import { useState } from 'react';
import { Header } from './components/header';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

const usersData = [
	{ id: 1, name: 'Victor Badaró', email: 'victor.badaro@fatec.sp.gov.br' },
	{ id: 2, name: 'Miryam Santana', email: 'miryam.santana@fatec.sp.gov.br' },
	{ id: 3, name: 'Lívia Rodrigues', email: 'livia.badaro@gmail.com' },
	{ id: 4, name: 'Ana Laura Rodrigues', email: 'analaura.badaro@gmail.com' }
];

export function App() {
	const [users] = useState(usersData);

	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<Header />

			<main className="container mx-auto">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold">Users</h1>

					<div className="border border-zinc-700 rounded-lg overflow-hidden">
						<Table className="text-zinc-400">
							<TableHeader className="bg-zinc-800">
								<TableRow className="border-zinc-700 hover:bg-zinc-800">
									<TableHead className="text-zinc-100">ID</TableHead>
									<TableHead className="text-zinc-100">Full name</TableHead>
									<TableHead className="text-zinc-100">E-Mail</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{users.map((user) => (
									<TableRow key={user.id} className="border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100">
										<TableCell>{user.id}</TableCell>
										<TableCell>{user.name}</TableCell>
										<TableCell>{user.email}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</main>
		</div>
	);
}
