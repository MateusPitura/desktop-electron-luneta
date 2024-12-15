import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const isDev = process.argv.includes('--dev');

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

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  }

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

ipcMain.on("execute", (event, data) => {
  const dataFormatted = JSON.parse(data);
  exec(dataFormatted.command, (error, stdout) => {
    if (error) {
      event.reply("result", error.message);
      return;
    }
    const result = {
      ...dataFormatted,
      output: stdout,
    };
    event.reply("result", JSON.stringify(result));
  });
});
