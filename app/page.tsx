import { MyClientComponent } from '@/app/action-state-client';
import { ActionStateComponent } from '@/app/server-action-client';

export default function Home() {
	return (
		<div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '1em'}}>
			<h1>react test case</h1>
			<h3>useActionState with objects</h3>
			<MyClientComponent />
			<h3>Steps</h3>
			<ol style={{margin: '10px 20px'}}>
				<li>Refresh page to load initial values on action state</li>
				<li>change title input, set all select to "ten" and submit</li>
			</ol>
			<h3>Expected</h3>
			<ul style={{margin: '10px 20px'}}>
				<li>Message change to server value</li>
				<li>title retains the submited user value, if it was empty, server defined default</li>
				<li>first select does nothing (not using any value set by react!)</li>
				<li>second select retains value (it only had default value, and we didnt reset form, nor reload page)</li>
				<li>third select should keep ten (the server replies with the same value sent, and this select is fully managed with value=value)</li>
			</ul>
			<p>See server console for the value being returned</p>

			<hr/>

			<h3>Second test: onSubmit+useTransition+useState network errors</h3>
			<ActionStateComponent />
			<h3>Steps</h3>
			<ol style={{margin: '10px 20px'}}>
				<li>set title to anythign other than "ok" (NOT "ok") and click submit above</li>
				<li>the request will return 403, in a onSubmit event, which calls preventDefault().</li>
			</ol>
			<h3>Expected</h3>
			<ul style={{margin: '10px 20px'}}>
				<li>The debug text changes from "init" to "got try/catch" - this is OK</li>
				<li>The console will show several error messages showing the network error</li>
				<li>the console.error() calls disappear, if they reference the catch parameter</li>
				<li>More weird than console.error disapearings, and regardless of failure (you can also submit with "ok" in the title), the red component ABOVE will refresh!!! components share no data! ...it will not update its state, but the code on its constructor will run again as can be seen by its console.logs.</li>
			</ul>


		</div>
	);
}
