import SlidingCardList from './components/SlidingCardList';
import SlidingCardList2 from './components/SlidingCardList2';
import BackgroundVideo from './components/BackgroundVideo';
import Link from 'next/link'; // Import the Link component
import './styles.css';

export default function HomePage() {
  return (
    <section className="intro-page">
      <BackgroundVideo />
      <div className="title">
        <h1>VALORANT Esports Manager</h1>
        <p>Build the best VALORANT team with AI-assisted analysis and scouting</p>
        
        {/* Start Now Button */}
        <Link href="/chatbot" className="nav-link">
        <button className="btn btn--light">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">
            START NOW
              </span>
          </span>
        </button>
        </Link>
      </div>
      
      <SlidingCardList />
      <SlidingCardList2 />
      <SlidingCardList />
      
      <div className="body"></div>
    </section>
  );
}
