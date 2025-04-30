import './App.css';
import Page from './components/Page';
import Name from './components/Name';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Personal from './components/Personal';
import Education from './components/Education';
import Footer from './components/Footer';
import { LinkCMYK } from './components/revamp/CMYK';

function App() {
  return (
    <Page>
      <Name />
      <About />
      <div className={'body'}>
        <div className={'left-column'}>
          <Skills />
        </div>
        <div className={'info'}>
          <div className={'info--left'}>
            <Work />
          </div>
          <div className={'info--right'}>
            <Education />
            <Personal />
          </div>
        </div>
      </div>
      <Footer/>
    </Page>
  );
}

export default App;
