import '../Components/LandingContent.css';
import imageDesktop from '../assets/image-hero-desktop.png'
import imageMobile from '../assets/image-hero-mobile.png'
import audiophile from '../assets/client-audiophile.svg'
import databiz from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'


const LandingContent = () => {
    return (
        <main className='landingBody'>
            <section className='landingContent'>
            <img className='mobileImage' src={imageMobile}></img>
                <h1>Make <span className='break'><br/></span> remote work</h1>
                <p>Get your team in sync, no matter your location.<span className='break'><br/></span>Streamline processes, create team rituals, and<span className='break'><br/></span> watch productivity soar.</p>
                <button>Learn more</button>
                <div className='iconCollection'>
                    <img src={databiz} />
                    <img src={audiophile} />
                    <img src={meet} />
                    <img src={maker} />
                </div>
            </section>
            <img src={imageDesktop}></img>
        </main>
    )
}

export default LandingContent;