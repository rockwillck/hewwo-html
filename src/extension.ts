// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const fs = require('fs');

function createFile(fileName: string, content: string) {
	let filePath = vscode.workspace.workspaceFolders![0].uri.fsPath + fileName;
	fs.writeFileSync(filePath, content, 'utf8');

	const openPath = vscode.Uri.file(filePath);
	vscode.workspace.openTextDocument(openPath).then(doc => {
		vscode.window.showTextDocument(doc);
	});
}

// function enterText(text: string) {
//     const editor = vscode.window.activeTextEditor;
//     if (editor) {
//         editor.edit(editBuilder => {
//             editBuilder.insert(editor.selection.active, text);
//         });
//     }
// }

// function createFile(path: string) {
// 	const wsedit = new vscode!.WorkspaceEdit();
// 	const wsPath = vscode.workspace.workspaceFolders![0].uri.fsPath; // gets the path of the first workspace folder
// 	const filePath = vscode.Uri.file(wsPath + path);
// 	wsedit.createFile(filePath, { ignoreIfExists: true });
// 	vscode.workspace.applyEdit(wsedit);
// }

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hewwo-html" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hewwo-html.addBoilerplate', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Okie!');

		createFile("/index.html", `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Hello, world!</title>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="description" content="" />
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="icon" href="">
</head>
<body>
	<h1>Hello, world!</h1>
	<footer>
	<small>© <script>document.write(new Date().getFullYear())</script> Your company name. All Rights Reserved.</small>
	</footer>
	<script src="app.js"></script>
</body>
</html>`);
		createFile("/app.js", `// Start coding here`);
		createFile("/style.css", `body {
	font-family: Arial, Helvetica, sans-serif;
}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
