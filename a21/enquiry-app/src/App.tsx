import './App.css'
import CategoryMaster from './pages/CategoryMaster'
import { Link, Route, Routes } from 'react-router-dom'
import StatusMaster from './pages/StatusMaster'
import NewEnquiryForm from './pages/NewEnquiryForm'
import EnquiryList from './pages/EnquiryList'
import Accordion from './pages/Accordion'
import Chips from './pages/Chips'
import ToDoList from './pages/ToDoList'
import ProgressBar from './pages/ProgressBar'

function App() {

  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link active" to={'/category'}>Category</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/status'}>Status</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/enquiry-list'}>Enquiry List</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/category'}>Category</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/accordion'}>Accordion</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/chips'}>Chips</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/todo'}>ToDo List</Link></li>
          <li className="nav-item"><Link className="nav-link active" to={'/progress'}>Progress Bar</Link></li>
        </ul>
        <form className="d-flex gap-2" action="/action_page.php">
          <input type="search" className="form-control" placeholder="Search" name="search" />
          <button type="submit" className="btn btn-outline-light">Submit</button>
        </form>
      </div>
    </nav>


     <Routes>
        <Route path='' element={<NewEnquiryForm />} />
        <Route path='category' element={<CategoryMaster />} />
        <Route path='status' element={<StatusMaster />} />
        <Route path='new-enquiry' element={<NewEnquiryForm />} />
        <Route path='enquiry-list' element={<EnquiryList />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='chips' element={<Chips />} />
        <Route path='todo' element={<ToDoList />} />
        <Route path='progress' element={<ProgressBar />} />
     </Routes>
    </>
  )
}

export default App
