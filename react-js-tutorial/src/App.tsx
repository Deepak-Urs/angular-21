import { Routes, Route, Link } from 'react-router'
import './App.css'
import ConditionalRender from './components/ConditionalRender'
import List from './components/List'
import UseEffects from './components/UseEffects'
import UseStates from './components/UseStates'
import DataEventBinding from './components/DataEventBinding'
import User from './components/User'
import NotFound from './components/NotFound'


function App() {
  return (
    <>


    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link className="nav-link" to={'/'}> Home </Link></li>
          <li><Link className="nav-link" to={'/data-event-binding'}> Data Binding</Link></li>
          <li><Link className="nav-link" to={'/use-effects'}>Use Effects</Link></li>
          <li><Link className="nav-link" to={'/use-states'}> Use States</Link></li>
          <li><Link className="nav-link" to={'/conditional-render'}> Conditional Render</Link></li>
          <li><Link className="nav-link" to={'/list'}> Lists</Link></li>
          <li><Link className="nav-link" to={'/user'}> User</Link></li>
          
        </ul>
      </div>
    </nav>
      
      <Routes>
        <Route path='/' element={<DataEventBinding/>}/>
        <Route path='/data-event-binding' element={<DataEventBinding/>}/>
        <Route path='/use-effect' element={<UseEffects/>}/>
        <Route path='/use-states' element={<UseStates/>}/> 
        <Route path='/conditional-render' element={<ConditionalRender/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/user/:userId' element={<User/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/*<ConditionalRender />*/}
      
      {/*<UseEffects />*/}
      {/*<UseStates />*/}

      {/*<h1>Hello React!</h1>
      < List />*/}
    </>
  )
}

export default App
