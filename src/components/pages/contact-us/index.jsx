import { Link } from "react-router-dom"

function ContactUs() {
    return (
        <div className="w-full min-h-screen flex-grow mt-14">
            <h1 className="flex justify-center font-serif text-navy text-5xl">Contact us</h1>
            <div className="flex justify-center gap-14 mt-9">
                <div>
                    <iframe className="w-72 h-72" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12187.777845986144!2d44.54051894999999!3d40.21029835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1704819432620!5m2!1sen!2sam" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <form>
                        <input className="bg-sage w-56 h-12 text-white placeholder:text-white p-5 rounded-lg" type="email" name="email" id="email" placeholder="Your email" />
                        <Link to="/">
                            <button className="w-28 bg-green text-white h-18 rounded-2xl ml-4">Submit</button>
                        </Link>
                    </form>
                    <div>
                        <h1 className="mt-9 font-serif text-navy text-2xl">Our contacts</h1>
                        <p className="mt-3 font-serif text-sage text-xl">thirdbloom@gmail.com</p>
                        <p className="mt-3 font-serif text-sage text-xl">+374 00 01 02 03 / +374 01 02 30 04</p>
                        <p className="mt-3 font-serif text-sage text-xl">Paruyr Sevak St. 11/11 </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs