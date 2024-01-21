import Header from "./layout/header";
import Footer from "./layout/footer";

function Layout(props) {
    return (
        <div className="min-h-screen flex-col">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}


export default Layout