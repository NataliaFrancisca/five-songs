'use client';
import Circle from "../components/circle/circle";
import { ViewComponent } from "./view.css";

const View = () => {

    return(
        <ViewComponent>
            <section id="lines">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </section>

            <section className="column" id="column-1">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </section>

            <section className="column" id="column-2">
                <br />
                <p>NATALIAS TOP FIVE</p>
                <br />
                <h1>DA LUA</h1>
                <br />
                <h1>MERCADO</h1>
                <br />
                <h1>ANOTHER LOVE</h1>
                <br />
                <h1>MONACO</h1>
                <br />
                <h1>CHOROJO</h1>
                <br />
            </section>

        </ViewComponent>
    )
}

export default View;