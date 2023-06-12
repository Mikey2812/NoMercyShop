import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminRouter from './routes/AdminRouter';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<AdminRouter/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
