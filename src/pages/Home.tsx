
import { Link } from "react-router-dom"
import { ImageComponent } from "../components/ImageCarousel/ImageCarousel"


export const Home = () => {
    return (
        <>
            <div style={{
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}>
                <ImageComponent />

                <h1>отиди на outlet</h1>
                <h2 >
                    <Link to="/outlet" style={{ textDecoration: "none" }}>outlet</Link>
                </h2>
            </div>
        </>
    )
}
