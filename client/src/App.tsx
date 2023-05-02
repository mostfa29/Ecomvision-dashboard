import { useMemo } from 'react'
import './App.css'
import {useSelector} from "react-redux"
import {createTheme} from "@mui/material/styles"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {themeSettings} from "./theme"
import {ThemeProvider, CssBaseline} from '@mui/material'
import Layout from './components/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/Client Facing/products/Products'
import Customers from './pages/Client Facing/customers/Customers'
import Transactions from './pages/Client Facing/transactions/Transactions'
import Geography from './pages/Client Facing/geography/Geography'
import Overview from './pages/Sales/overview/Overview'
import Daily from './pages/Sales/daily/Daily'
import Monthly from './pages/Sales/monthly/Monthly'
import Breakdown from './pages/Sales/breakdown/Breakdown'


function App() {
  const mode = useSelector((state:any)=>state.global.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/geography" element={<Geography/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/daily" element={<Daily/>} />
            <Route path="/monthly" element={<Monthly/>} />
            <Route path="/breakdown" element={<Breakdown/>} />

            

          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
