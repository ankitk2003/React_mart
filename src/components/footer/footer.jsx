import style from'./footer.module.css'
const Footer=()=>{
    return(
        <>
        <h2><center>Visit us Again</center></h2>
        <div className={style.mainDiv}>
            <ul className={style.list1}>
                <li>About Us</li>
                <li>Contact us</li>
                <li>FAQ</li>
                <li>Terms and Condition</li>
            </ul>
            <ul className={style.list2}>
                <li>Shipping & Delivery</li>
                <li>Returns & Refunds</li>
                <li>Track Your Order</li>
            </ul>
            <ul className={style.list3}>
                <li>Privacy Policy</li>
                <li>Customer Reviews</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <ul className={style.list4}>
                <li>Social Media</li>
                <li>Subscribe to Newsletter</li>
                <li>Accessibility</li>
                <li>Site Map</li>
            </ul>
        </div>
        </>
    )
}
export default Footer;