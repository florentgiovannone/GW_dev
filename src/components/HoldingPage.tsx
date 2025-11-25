import '../styles/holding-page.css';
import logo from '../Assets/Images/Greyhound-Winners-White.png';

const HoldingPage = () => {
    return (
        <div className="holding-page">
            <main className="holding-container">
                <img
                    src={logo}
                    alt="Greyhound Winners Logo"
                    className="holding-logo"
                />

                <h1 className="holding-title">
                    A NEW BREED OF VIRTUAL RACING IS COMING SOON
                </h1>

                <p className="holding-description">
                    We're in the final stretch. Greyhound Winners is a new, fast-paced virtual betting game featuring six back-to-back races, exciting bet markets, and a non-stop, high-quality stream.
                </p>

                <p className="holding-cta-prompt">
                    For operator and integration enquiries, please contact us at:
                </p>

                <p className="holding-cta-email">
                    <a href="mailto:info@greyhound-winners.com" rel="noopener noreferrer">info@greyhound-winners.com</a>
                </p>
            </main>

            <footer className="holding-footer">
                © 2025 A Bet A Technology Ltd. All rights reserved.
            </footer>
        </div>
    );
};

export default HoldingPage;

