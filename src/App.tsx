import { Routes, Route } from 'react-router-dom'
import { StaticFormScreen } from './staticForm/StaticForm.screen'
import { AppBar } from './_shared/components/appBar/AppBar.component'

function App() {
  return (
    <AppBar>
      <Routes>
        <Route path="/staticForm" element={<StaticFormScreen />} />
      </Routes>
    </AppBar>
  )
}

export default App
