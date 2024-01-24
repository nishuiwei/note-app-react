import { Content, RootLayout, Sidebar } from './components'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="p-2">Sidebar</Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">content</Content>
    </RootLayout>
  )
}

export default App
