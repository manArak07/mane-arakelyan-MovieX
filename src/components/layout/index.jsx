import { useContext } from "react";
import Footer from "./footer";
import Header from "./header";
// redux context
import { ThemeContext } from "../../providers/context";

// layout
function Layout(props) {
    const { mode } = useContext(ThemeContext);

    return (
        <div className={`${mode ? "bg-[#101720]" : "bg-white"}`}>
            <Header />
            <main className="min-h-screen  w-full font-geologica">{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
