'use server'
import 'server-only';
import { forbidden } from 'next/navigation';

export interface MyDataObj {
	title: string,
}

export interface MyData {
	message: string,
	data: MyDataObj,
}

export async function myServerActionDenied( post: FormData ): Promise<MyData> {
	const input_title = post.get('title');
	if( input_title === 'ok' ){
		return {message: 'asdf', data: {title: 'asdf'}};
	}
	return forbidden();
}
