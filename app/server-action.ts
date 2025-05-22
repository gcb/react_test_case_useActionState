'use server'
import 'server-only';

export interface MyDataObj {
	title: string,
}

export interface MyData {
	message: string,
	data: MyDataObj,
}

export async function myServerAction( prevState: MyData, post: FormData ): Promise<MyData> {
	const newState = prevState; // bug. any change to object will be ignored.
	//const newState: MyData = { message: 'server value', data: prevState.data }; // bug. any change to data/data.title will be ignored
	//const newState = structuredClone(prevState); // ok
	
	const newTitle = post.get('title');
	if( newTitle ){
		newState.data.title = newTitle.valueOf() as string;
	} else {
		if( !newState.data.title ) newState.data.title = 'default from server';
	}
	
	newState.message = "hello from server";
	console.log(newState);
	return newState;
}
