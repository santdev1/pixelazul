const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      contextIsolation: true
    }
  });

  const indexPath = path.join(__dirname, 'dist/index.html');
  console.log('Carregando:', indexPath);
  win.loadFile(indexPath);

  win.webContents.openDevTools(); 
}

app.whenReady().then(() => {
  createWindow();
});
