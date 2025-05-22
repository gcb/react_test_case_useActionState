import { MyClientComponent } from '@/app/client-form';

export default function Home() {
	return (
		<div style={{ padding: '10px'}}>
			<h1>react test case</h1>
			<h3>useActionState with objects</h3>
			<MyClientComponent />
			<h3>Steps</h3>
			<ol style={{margin: '10px 20px'}}>
				<li>Refresh page to load initial values on action state</li>
				<li>change title input, and submit</li>
			</ol>
			<h3>Expected</h3>
			<ul style={{margin: '10px 20px'}}>
				<li>Message change to server value</li>
				<li>title retains the submited user value, if it was empty, server defined default</li>
			</ul>
			<p>See server console for the value being returned</p>

		</div>
	);
}
