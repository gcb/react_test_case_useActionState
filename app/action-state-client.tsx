'use client'
import { useActionState, useState } from 'react';
import { myServerAction, type MyData } from '@/app/server-action';

export function MyClientComponent(){

	console.info('useActionState: constructor');
	const initialState: MyData = {
		message: 'start client value',
		data: { title: 'initial client title', sel1: 1 },
	}

	const [serverState, formAction, isPending] = useActionState(myServerAction, initialState);
	const [sel2, setSet2 ] = useState(serverState.data.sel2);
	console.info('useActionState current state:', serverState);

	return (
		<form action={formAction} style={{display: 'block', border: '1px solid red;'}}>
			<div style={{display: 'flex', flexDirection: 'column'}}>
			<label htmlFor="title">Title</label>
			<input type="text" name="title" defaultValue={serverState.data.title}/>
			<label htmlFor="sel">Uncontrolled Select</label>
			<select name="sel">
				<option value="0"></option>
				<option value="1">one</option>
				<option value="2">two</option>
				<option value="10">ten</option>
			</select>
			<label htmlFor="sel1">defaultvalue=1 Select</label>
			<select name="sel1" defaultValue={serverState.data.sel1}>
				<option value="0"></option>
				<option value="1">one</option>
				<option value="2">two</option>
				<option value="10">ten</option>
			</select>
			<label htmlFor="sel2">Fully value={sel2}/onChange Controlled Select (label here uses the same value)</label>
			<select name="sel2" value={sel2} onChange={(e)=>setSet2(parseInt(e.currentTarget.value))}>
				<option value="0"></option>
				<option value="1">one</option>
				<option value="2">two</option>
				<option value="10">ten</option>
			</select>
			<button type="submit" disabled={isPending}>{isPending ? ("...") : ("Send")}</button>
			<p>{serverState.message}<br/><br/></p>
			<p>{JSON.stringify(serverState)}</p>
			</div>
		</form>
	);
}
