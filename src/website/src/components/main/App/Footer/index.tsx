import FooterAuthorsInfo from './FooterAuthorsInfo/FooterAuthorsInfo';
import FooterInfo from './FooterData/FooterInfo';
import FooterMenu from './FooterMenu/FooterMenu';
import './footer.css';
export default function Footer() {
    return (
        <footer>
            <div>
                <div className="autores">
                    <FooterAuthorsInfo />
                </div>
                <div className="main-footer">
                    <FooterInfo />
                    <FooterMenu />
                </div>
            </div>
        </footer>
    );
}
