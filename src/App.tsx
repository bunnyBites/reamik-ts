import { Routes, Route, Navigate } from 'react-router-dom'
import { StaticFormScreen } from './staticForm/StaticForm.screen'
import { AppBar } from './_shared/components/appBar/AppBar.component'
import { DyanamicForm } from './dynamicForm/DynamicForm.component';

function App() {
  return (
    <AppBar>
      <Routes>
        <Route path="/" element={<Navigate to="/staticForm" />} />
        <Route path="/staticForm" element={<StaticFormScreen />} />
        <Route path="/dynamicForm" element={<DyanamicForm />} />
      </Routes>
    </AppBar>
  )
}

export default App
