import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="w-full flex items-center flex-col min-h-screen justify-center">
            <h1 className="text-atomicTangerine text-7xl font-serif flex justify-center mt-8">Welcome!</h1>
            <div className="flex items-center justify-center w-full mt-16">
                <div className="flex w-full  justify-center">
                    <h1 className="w-1/2 font-serif text-3xl text-darkBlue flex">
                        Welcome to Our Website! Dive into our curated articles, news, and insights on the most impactful technological trends. Whether you're a tech enthusiast, developer, or just curious about the future, we've got you covered.urious about how our users are leveraging technology in their lives? Explore our user stories and be inspired by real-world applications of the latest tech. From startups to established enterprises, see how technology is making a difference.
                    </h1>
                    <img className="w-2/5 rounded-lg" src="/images/techs.jpg" alt="Technologies" />
                </div>

            </div>
            <div>
                <Link to="/users">
                    <button className="w-72 h-10 rounded-lg text-lg bg-sage mt-8 text-white font-serif">Click here to see our users!</button>
                </Link>
            </div>
        </div>
    )
}

export default Home