import Header from './components/header/header';
import AppRouter from './components/router/router';
import './App.css';
import CustomerScreen from './components/customer/customerScreen';

function App() {
  return (
    <>
      <Header/>
      <AppRouter/>
      <CustomerScreen/>
    </>
  );
}

export default App;
