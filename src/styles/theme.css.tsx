export const PAPER_THEME = [
    {
        id: 0,
        title: 'WHITE',
        style: {
            primary_color: "#9974F8",
            secondary_color: "#1A1B1C",
            paper_color: "#D9D9D9",
            fill: "#9974F8",
            stroke: "#1A1B1C"
        }
    },

    {
        id: 1,
        title: 'BLACK',
        style: {
            primary_color: "#C6F277",
            secondary_color: "#FDF6EC",
            paper_color: "#16120F",
            paper_line_color: "rgba(253, 246, 236, 0.60)",
            fill: "#090808",
            stroke: "#C6F277"
        }
    },

    {
        id: 2,
        title: 'GREEN',
        style: {
            primary_color: "#FDF6EC",
            secondary_color: "#16120F",
            paper_color: "#C6F277",
            fill: "#FDF6EC",
            stroke: "#16120F"
        }
    },

    {
        id: 3,
        title: 'PURPLE',
        style: {
            primary_color: "#16120F",
            secondary_color: "#16120F",
            paper_color: "#9A73F9",
            fill: "#16120F",
            stroke: "#FDF6EC"
        }
    }
]


export const handleStickerColor = (color:string )=> {
    switch (color) {
    case "#9974F8":
        return "url('icon/sticker-purple.svg')"
    case "#C6F277":
        return "url('icon/sticker-green.svg')"
    case "#16120F":
        return "url('icon/sticker-black.svg')"
    case "#FDF6EC":
        return "url('icon/sticker-white.svg')"
      default:
        return "#9974F8";
    }
};
