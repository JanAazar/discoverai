import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './homepage';
import Picks_one from './picks_one';
import Picks_two from './picks_two';
import Picks_three from './picks_three';
import Picks_four from './picks_four';
import Picks_five from './picks_five';
import Picks_six from './picks_six';
import Form from './form';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Homepage />} /> 
        <Route path="/result_one" element={<Picks_one />} /> 
        <Route path="/result_two" element={<Picks_two />} />
        <Route path="/result_three" element={<Picks_three />} />
        <Route path="/result_four" element={<Picks_four />} />
        <Route path="/result_five" element={<Picks_five />} />
        <Route path="/result_six" element={<Picks_six />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;


