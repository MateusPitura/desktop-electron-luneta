import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: true,
    },
  });

  // mainWindow.loadURL("http://localhost:5173"); // Dev
  mainWindow.loadFile(path.join(__dirname, "dist/index.html")); // Prod

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("execute-command", (event, message) => {
  exec(message, (error, stdout, stderr) => {
    if (error) {
      event.reply("command-result", error.message);
      return;
    }
    event.reply("command-result", stdout || stderr);
  });
});
