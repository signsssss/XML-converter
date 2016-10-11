const electron = require('electron')
const browserWindow = electron.BrowserWindow
const Menu = electron.Menu
const app = electron.app

let template = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New',
				role: 'New'
			}, 
			{
				label: 'Open',
				role: 'Open'
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
