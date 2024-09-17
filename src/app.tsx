import { Header } from './components/header';
import { UsersList } from './components/users-list';
import { UsersProvider } from './providers/users-provider';

export function App() {
	return (
		<div className="space-y-8 min-h-screen bg-zinc-900 text-zinc-100">
			<UsersProvider>
				<Header />

				<main className="container mx-auto">
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl font-semibold">Users</h1>
						<UsersList />
					</div>
				</main>
			</UsersProvider>
		</div>
	);
}
