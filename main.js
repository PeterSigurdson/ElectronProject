const { app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');
let win;
function createWindow(){
	win = new BrowswerWindow({width:800, height:600})	

    win.loadURL(url.format) ({
	pathname:path.join(__dirname, 'index.html'), 
	protocol:'file:',
	slashes: true
});
win.on('closed', () => {
	win=null
})

win.openDevTools()
