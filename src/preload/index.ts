import { GetNotes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowerWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (err) {
  console.log(err)
}
