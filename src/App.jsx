import { Nav, Hero, Sponsors, Body, BenefitSection, Work, FeedbackSection, AdSection, Footer } from './components'

function App() {
  return (
    <div>
      <div className='static mx-auto max-w-screen-2xl'>
        <Nav/>
        <Hero/>
        <Sponsors/>
        <Body/>
        <BenefitSection/>
        <Work/>
        <FeedbackSection/>
        {/* <AdSection/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default App
