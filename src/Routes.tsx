import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { Home } from "./index"
import { Baluartes } from "./pages/Baluartes"
import { Blog } from "./pages/Blog/Blog"
import { Post } from "./pages/Blog/[slug]"
import { Comunidade } from "./pages/Comunidade"
import { Contato } from "./pages/Contato"
import { Downloads } from "./pages/downloads/Downloads"
import { Book } from "./pages/downloads/[slug]"
import { Evangelho } from "./pages/Evangelho/Evangelho"
import { EvangelhoPost } from "./pages/Evangelho/[slug]"

export function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post" element={<Post />} />
        
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/baluartes" element={<Baluartes />} />
        
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/downloads/book" element={<Book />} />
        
        <Route path="/contato" element={<Contato />} />
        
        <Route path="/evangelho" element={<Evangelho />} />
        <Route path="/evangelho/evangelhopost" element={<EvangelhoPost />} />
      </Routes>
    </Router>
  )
}