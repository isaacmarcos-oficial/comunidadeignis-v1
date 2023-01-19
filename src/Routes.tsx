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
import { Meditacoes } from "./pages/Meditacoes/Meditacoes"
import { MeditacoesPost } from "./pages/Meditacoes/[slug]"

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
        
        <Route path="/meditacoes" element={<Meditacoes />} />
        <Route path="/meditacoes/post" element={<MeditacoesPost />} />
      </Routes>
    </Router>
  )
}