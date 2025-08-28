import './App.css';
import Page from './components/Page';
import Name from './components/Name';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Personal from './components/Personal';
import Education from './components/Education';
import Footer from './components/Footer';
import Icon from './components/Icon';
import PrinterLink from './components/PrinterLink';

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
      
      <div className={'about--contact mobile'}>
          <PrinterLink className={'about--contact-item'} url={'https://www.github.com/hmeinertrita'} text={'GitHub Repositories'} prependIcon={'github'}/>
          <PrinterLink className={'about--contact-item'} url={'https://www.linkedin.com/in/hmeinertrita'} text={'LinkedIn Profile'} prependIcon={'linkedin'}/>
          <PrinterLink className={'about--contact-item'} url={'mailto:hmeinertrita@gmail.com'} prependIcon={'mail-send'}/>
          <div className={'about--contact-item'}><Icon icon={'phone'}/><span>{'1-585-733-3463'}</span></div>
      </div>
      <Footer/>
    </Page>
  );
}

export default App;
