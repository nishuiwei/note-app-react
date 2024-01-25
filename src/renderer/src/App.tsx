import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from './components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 sp-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">content</Content>
      </RootLayout>
    </>
  )
}

export default App
