import { contextBridge } from 'electron'
if (process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowerWindo')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (err) {
  console.log(err)
}
