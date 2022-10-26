import { Routes, Route} from "react-router-dom";
import { CoinPage } from "./components/CoinPage";
import { HomePage } from "./components/HomePage";




export function App() {



  return (

    <>    
    <Routes>
        <Route path="./" element={<HomePage />} />
        <Route path="coin/:id" element={<CoinPage />} />
      </Routes>
    </>
  )

}


