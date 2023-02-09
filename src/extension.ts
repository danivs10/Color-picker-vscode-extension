import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('colorPicker.pickColor', () => {
    let picker = vscode.window.createQuickPick();
    picker.items = [
      { label: 'Red', description: '#ff0000' },
      { label: 'Green', description: '#00ff00' },
      { label: 'Blue', description: '#0000ff' }
    ];
    picker.onDidChangeSelection(([item]) => {
      if (item) {if (item.description) {
		vscode.env.clipboard.writeText(item.description);
	  } else {
		vscode.window.showErrorMessage('Item description is undefined');
	  }
	  
        picker.dispose();
      }
    });
    picker.show();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
