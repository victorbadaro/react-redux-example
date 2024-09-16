import { useState } from 'react';
import { Header } from './components/header';
import { UsersList } from './components/users-list';

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
					<UsersList users={users} />
				</div>
			</main>
		</div>
	);
}
