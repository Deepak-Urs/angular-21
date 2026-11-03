import './App.css'
import CategoryMaster from './pages/CategoryMaster'
import { Route, Routes } from 'react-router-dom'
import StatusMaster from './pages/StatusMaster'
import NewEnquiryForm from './pages/NewEnquiryForm'
import EnquiryList from './pages/EnquiryList'

function App() {

  return (
    <>
     <Routes>
        <Route path='' element={<NewEnquiryForm />} />
        <Route path='category' element={<CategoryMaster />} />
        <Route path='status' element={<StatusMaster />} />
        <Route path='new-enquiry' element={<NewEnquiryForm />} />
        <Route path='enquiry-list' element={<EnquiryList />} />
     </Routes>
    </>
  )
}

export default App
