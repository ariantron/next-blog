export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <div className="site-footer">
            <p>Next Blog, all rights reserved &copy; {currentYear}</p>
        </div>
    );
}