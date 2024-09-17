import { UserToBeUpdated } from '@/app';
import { CreateUserDialog } from './create-user-dialog';

interface HeaderProps {
	addUser: (user: UserToBeUpdated) => void;
}

export function Header({ addUser }: HeaderProps) {
	return (
		<header className="flex items-center h-20 bg-zinc-950 text-zinc-100">
			<nav className="flex justify-between items-center container mx-auto">
				<span className="text-2xl">React Redux Example</span>

				<CreateUserDialog addUser={addUser} />
			</nav>
		</header>
	);
}
