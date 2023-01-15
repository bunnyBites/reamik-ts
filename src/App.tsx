import { StaticFormScreen } from './staticForm/StaticForm.screen'
import { AppBar } from './_shared/components/appBar/AppBar.component'

function App() {
  return (
    <AppBar>
      {/* Will include react router configuration soon */}
      <StaticFormScreen />
    </AppBar>
  )
}

export default App
