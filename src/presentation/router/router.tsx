import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'
import MagicItem from '../pages/magic-item/magic-item'
import '@/presentation/styles/theme.scss'

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="item" element={<MagicItem />}/>
            <Route path="demon" element={<Home />}/>
            <Route path="loot" element={<Home />}/>
            <Route path="dungeon" element={<Home />}/>
            <Route path="*" element={<Home />}/> {/* => o path * é ideal pra paginas de erro 404 */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  )
}
export default Router
