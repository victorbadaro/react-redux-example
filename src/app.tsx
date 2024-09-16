import { useState } from 'react';
import { Header } from './components/header';
import { UsersList } from './components/users-list';

type User = {
	id: number;
	name: string;
	email: string;
}

export function App() {
	const [users, setUsers] = useState<User[]>([]);

	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<Header users={users} setUsers={setUsers} />

			<main className="container mx-auto">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-semibold">Users</h1>
					<UsersList users={users} />
				</div>
			</main>
		</div>
	);
}
