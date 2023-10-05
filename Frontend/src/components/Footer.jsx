

const Footer = () => {
    return (
<footer>
        <h2>FUNNY SOCKS</h2>
        <div>
            <ul className="footer-links">
                <li><a href="www.twitter.com/funnysocks" target="_blank">twitter</a></li>
                <li><a href="www.instagram.com/funny.socks" target="_blank">instagram</a></li>
                <li><a href="www.facebook.com/funny_socks" target="_blank">facebook</a></li>
                
            </ul>
            <ul className="footer-iconos">
                <li><img src="img/twitter.png" alt="twitter"/></li>
                <li><img src="img/ig.png" alt="ig"/></li>
                <li><img src="img/fb.png" alt="fb"/></li>
            </ul>
        </div>
        <div className="copyright">
            <p>Copyright 2023 &copy;</p>
        </div>
    </footer>
    );
};

export default Footer;