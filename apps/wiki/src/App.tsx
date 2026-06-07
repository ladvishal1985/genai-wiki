import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WikiHome from './pages/WikiHome'
import Blog from './pages/Blog'
import Interview from './pages/Interview'
import NotFound from './pages/NotFound'
import DictionaryApp from './dictionary/DictionaryApp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wiki" element={<WikiHome />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="dictionary/*" element={<DictionaryApp />} />
          <Route path="interview" element={<Interview />} />
          <Route path="interview/mock-test" element={<Interview />} />
          <Route path="interview/:topicSlug" element={<Interview />} />
          <Route path="interview/:topicSlug/:questionId" element={<Interview />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
