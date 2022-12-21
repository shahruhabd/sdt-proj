import '../../styles/components/footer.css'
import logo from '../../img/images/almau_logo.png'

function Footer() {
    const email = 'mailto:info@sdt.bid?subject = Support&amp;body = Message'
    const inst = "https://www.instagram.com/invites/contact/?i=15jtkmuv4nasl&utm_content=q1e6tkl"
    return(
        <div className='footer-wrapper'>
            <div className='footer-header'>
                <img src={logo} alt="" width={70}/>
                <a href="#">SDT INNOVATION CLUB</a>
            </div>
            <div className='footer-adress'>Almaty Managment University Rozybakieva 227, Almaty 050060</div>
            <div className='footer-rights'>All Rights Reserved,  SDT  Innovation Club</div>
            <div className='footer-links'>
                <a href={email}>info@std.bid</a>
                <a href={inst}>@sdt_innovation_club</a>
            </div>
        </div>
    )
}

export default Footer