import { Dispatch, SetStateAction } from 'react';
import { CreateUserDialog } from './create-user-dialog';

type User = {
	id: number;
	name: string;
	email: string;
}

interface HeaderProps {
	users: User[];
	setUsers: Dispatch<SetStateAction<User[]>>;
}

export function Header({ users, setUsers }: HeaderProps) {
	return (
		<header className="flex items-center h-20 bg-zinc-950 text-zinc-100">
			<nav className="flex justify-between items-center container mx-auto">
				<span className="text-2xl">React Redux Example</span>

				<CreateUserDialog users={users} setUsers={setUsers} />
			</nav>
		</header>
	);
}
