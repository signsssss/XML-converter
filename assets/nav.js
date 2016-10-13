const ipc = require('electron').ipcRenderer

ipc.on('selected-file', function(event, path) {
	document.getElementById('selected-file').innerHTML = path.msg
})
