import { Nav, Hero, Sponsors, Body, BenefitSection, Work, FeedbackSection, AdSection, Footer } from './components'

function App() {
  return (
    <div className='static'>
      <Nav/>
      <Hero/>
      <Sponsors/>
      <Body/>
      <BenefitSection/>
      <Work/>
      <FeedbackSection/>
      {/* <AdSection/> */}
      <Footer/>
    </div>
  )
}

export default App
