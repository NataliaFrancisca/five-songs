'use client';
import Songs from "../components/songs/songs";
import { ViewComponent } from "./view.css";

const paper_theme = {
    white: {
        punched_color: '#16120F',
        paper_color: '#FDF6EC',
        text_color: '#1A1B1C',

        number_color: {
            fill: '#9974F8',
            stroke:'#16120F'
        }
    },

    black: {
        punched_color: '#FDF6EC',
        paper_color: '#16120F',
        paper_line_color: 'rgba(253, 246, 236, 0.60)',
        text_color: '#FDF6EC',

        number_color: {
            fill: '#C6F277',
            stroke: '#000000'
        }
    },

    green: {
        punched_color: '#16120F',
        paper_color: '#C6F277',
        text_color: '#1A1B1C',

        number_color: {
            fill: '#16120F',
            stroke: '#FDF6EC'
        }
    },

    purple: {
        punched_color: '#16120F',
        paper_color: '#9A73F9',
        text_color: '#1A1B1C',

        number_color: {
            fill: '#FDF6EC',
            stroke: '#16120F'
        }
    }
}

const View = () => {
    return(
        <ViewComponent $theme={paper_theme.white}>
            <section id="lines">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </section>

            <section id="punched-paper-column">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </section>

            <Songs numberColor={paper_theme.white.number_color} />

        </ViewComponent>
    )
}

export default View;