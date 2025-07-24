'use server'
import 'server-only';

export interface MyDataObj {
	title: string,
	sel ?:number,
	sel1 ?:number,
	sel2 ?:number,
}

export interface MyData {
	message: string,
	data: MyDataObj,
}

export async function myServerAction( prevState: MyData, post: FormData ): Promise<MyData> {
	const newState = structuredClone(prevState);

	const newTitle = post.get('title');
	if( newTitle ){
		newState.data.title = newTitle.valueOf() as string;
	} else {
		if( !newState.data.title ) newState.data.title = 'default from server';
	}
	let x = post.get('sel');
	newState.data.sel = parseInt(x);
	x = post.get('sel1');
	console.warn(x);
	newState.data.sel1 = parseInt(x);
	x = post.get('sel2');
	console.warn(x);
	newState.data.sel2 = parseInt(x);
	
	newState.message = 'hello from server';
	console.log(newState);
	return newState;
}
