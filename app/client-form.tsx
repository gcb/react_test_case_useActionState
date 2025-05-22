'use client'
import { useActionState} from 'react';
import { myServerAction, type MyData } from '@/app/server-action';

export function MyClientComponent(){

	const initialState: MyData = {
		message: 'start client value',
		data: { title: 'initial client title' },
	}

	const [serverState, formAction, isPending] = useActionState(myServerAction, initialState);
	console.log('Got serverState:', serverState);

	return (
		<form action={formAction}>
			<label htmlFor="title">Title</label>
			<input type="text" name="title" defaultValue={serverState.data.title}/>
			<button type="submit" disabled={isPending}>{isPending ? ("...") : ("Send")}</button>
			<p>{serverState.message}</p>
		</form>
	);
}
