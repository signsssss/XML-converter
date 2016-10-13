const electron = require('electron')
const browserWindow = electron.BrowserWindow
const dialog = electron.dialog
const ipc = electron.ipcMain
const Menu = electron.Menu
const app = electron.app

let template = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New',
				accelerator: 'CmdOrCtrl+N',
				role: 'New',
			}, 
			{
				label: 'Open',
				accelerator: 'CmdOrCtrl+O',
				role: 'Open',
				click: function(item, focusedWindow) {
					dialog.showOpenDialog({
						properties: ['openFile']
					}, function (files) {
						focusedWindow.webContents.send('selected-file', {msg: files})
					})
				}
			},
			{
				label: 'Close',
				role: 'Close'
			},
			{
				type: 'separator'
			},
			{
				label: 'Open Project',
				role: 'Open Project'
			},
			{
				label: 'Save',
				role: 'Save'
			},
			{
				label: 'Save as',
				role: 'Save as'
			},
			{
				label: 'Save all',
				role: 'Save all'
			},
			{
				type: 'separator'
			},
			{
				label: 'Exit',
				role: 'Exit'
			}
		]
	}, 

	{
		label: 'XML',
		submenu: [
			{
				label: 'Open source',
				role: 'Open source'
			},
			{
				type: 'separator'
			},
			{
				label: 'Simulation',
				role: 'Simulation'
			},
		]
	},

	{
		label: 'Transfer',
		submenu: [
			{
				label: 'Upload',
				role: 'Upload'
			},
			{
				label: 'Download',
				role: 'Download'
			}
		]
	}
]

app.on('ready', function() {
	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)
})
