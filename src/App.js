import logo from './assets/logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import bg from './assets/bg.jpg';
import back from './assets/back.jpg';



const App = () => {
  return (
    <>
        <Header title={'Hello'} desc={'Hi from React Component'}/>
        <Layout title={'Firts Component'} desc={'This is first React Component'} urlBg={bg} />
        <Layout title={'Second Component'} desc={'This is second React Component'}  colorBg={'#e2e2e2'}/>
        <Layout title={'Three Component'} desc={'This is third React Component'} urlBg={back} />
        <Footer />
    </>
  );
};

export default App;
