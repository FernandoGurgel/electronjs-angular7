const electron = require('electron');
const { app, BrowserWindow } = require('electron');

let win;
let mainWindow;

function createWindow () {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    setMenu: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.setFullScreen(true);
  
//   console.log(__dirname+"/timer-angular/dist/timer-angular/index.html");
  mainWindow.loadURL(`file://${__dirname}/timer-angular/dist/timer-angular/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})