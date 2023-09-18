import '../Components/LandingContent.css';
import imageDesktop from '../assets/image-hero-desktop.png'
import audiophile from '../assets/client-audiophile.svg'
import databiz from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'


const LandingContent = () => {
    return (
        <main className='landingBody'>
            <section className='landingContent'>
                <h1>Make<br/> remote work</h1>
                <p>Get your team in sync, no matter your location.<br />Streamline processes, create team rituals, and<br /> watch productivity soar.</p>
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