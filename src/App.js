import './App.css';
import Navbarlight from './components/1.Navbar';
import Headings from './components/3.headings';
import Section2 from './components/4.activities';
import Section3 from './components/5.parallax1';
import Section4 from './components/6.events';
import Section5 from "./components/7.parallax2"
import Section6 from './components/8.teachers';
import Section7 from './components/9.parallax3';
import Section8 from './components/10.news';
import Footer from './components/footer';



function App() {
  return (
    <>
      <div className='App_Container'>
      <Navbarlight />
      <Headings title="OUR ACTIVITIES" description="OUR BEST SERVICES FOR YOUR KIDS" color="#edbf47"/>
      <Section2 />
      <Section3 />
      <Headings title="OUR EVENTS" description="DON'T MISS OUR EVENTS" color="#6fc191"/>
      <Section4 />
      <Section5 />
      <Headings title="ORANGE CLASS" description="FULL TIME · AGE: 3-6 YEARS OLD" color="#ec774b"/>
      <Section6 />
      <Section7 />
      <Headings title="OUR NEWS" description="FOLLOW OUR MOST IMPORTANT NEWS" color="#74cee4"/>
      <Section8 />
      <Footer />
      </div>
    </>
  );
}

export default App;
