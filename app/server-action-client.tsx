'use client'
import { type FormEvent, useState, useTransition} from 'react';
import { myServerActionDenied, type MyData } from '@/app/server-action-denied';

export function ActionStateComponent(){

	const initialState: MyData = {
		message: 'start client value',
		data: { title: 'initial client title' },
	}

	const [debug, setDebug] = useState('init');
	const [state, setState] = useState(initialState);
	const [isPending, startTransition] = useTransition();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		try{
			const server = await myServerActionDenied(formData);
			console.info('before console.error');
			console.error('response OK', server); // <-- ok (and intercepted by nextjs turbopack client UX)
			console.error('response OK', 123); // <-- ok (and intercepted by nextjs turbopack client UX)
			console.info('after console.error');
			setDebug('ok');
		}catch(err){
			console.info('before console.error');
			console.error('got try/catch', err ); // <-- nowhere to be found.
			console.error('got try/catch', err || 'nada'); // <-- nowhere to be found.
			console.error('got try/catch', err ?? 'nada'); // <-- nowhere to be found.
			console.error('got try/catch', (err) || 'nada'); // <-- nowhere to be found.
			console.error('got try/catch', (err) ?? 'nada'); // <-- nowhere to be found.
			console.info('after console.error'); // <-- ok
			//console.error('got try/catch', 123); // <-- ok (and intercepted by nextjs turbopack client UX)
			//console.log('log err', err ); // <-- ok
			//console.info('info err', err ); // <-- ok
			//console.debug('debug err', err ); // <-- ok
			//console.warn('warn err', err ); // <-- ok
			//console.trace('trace err', err ); // <-- ok
			setDebug('got try/catch');
		}
	}
	// same as above
	//const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	//	e.preventDefault();
	//	const formData = new FormData(e.currentTarget);
	//	try{
	//		startTransition(async () => {
	//			try{
	//				const server = await myServerActionDenied(formData);
	//				console.log('after await serverAction', server);
	//				startTransition(()=> setDebug('ok'));
	//			}catch(err){
	//				console.info('before console.error');
	//				console.error('got try/catch', err); // <-- nowhere to be found.
	//				console.info('after console.error');
	//				startTransition(()=>setDebug('got try/catch'));
	//			}
	//		});
	//	}catch(err){
	//		console.error('got external try/catch', err);
	//		setDebug('got external try/catch');
	//	}
	//}


	return (
		<form onSubmit={handleSubmit} method="POST" action="https://google.com/" style={{display: 'block', border: '1px solid green;'}}>
			<b>{debug}</b><br/>
			<label htmlFor="title">Title</label>
			<input type="text" name="title" defaultValue={state.data.title}/>
			<button type="submit" disabled={isPending}>{isPending ? ("...") : ("Send")}</button>
			<p>{state.message}</p>
		</form>
	);
}
