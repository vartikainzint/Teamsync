import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import net from 'net'; // Used to check if Vite is running

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if we are in development mode
const isDev = process.env.NODE_ENV === 'development' || process.env.ELECTRON_DEV === 'true';
const VITE_DEV_SERVER_URL = 'http://localhost:5173';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    console.log("Running in Development Mode: Loading Vite Dev Server");
    
    waitForVite().then(() => {
      mainWindow.loadURL(VITE_DEV_SERVER_URL);
      mainWindow.webContents.openDevTools(); // Open DevTools for debugging
    }).catch((err) => {
      console.error("Vite Dev Server not found:", err);
    });

  } else {
    console.log("Running in Production Mode: Loading Local HTML");
    const indexPath = `file://${path.join(__dirname, 'dist', 'index.html')}`;
    mainWindow.loadURL(indexPath);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ✅ Ensure Vite Dev Server is Ready Before Loading
async function waitForVite() {
  const port = 5173;
  return new Promise((resolve, reject) => {
    const checkServer = () => {
      const socket = new net.Socket();
      socket.setTimeout(1000);
      socket.once('connect', () => {
        socket.destroy();
        resolve();
      });
      socket.once('error', () => {
        socket.destroy();
        setTimeout(checkServer, 500);
      });
      socket.connect(port, 'localhost');
    };
    checkServer();
  });
}
