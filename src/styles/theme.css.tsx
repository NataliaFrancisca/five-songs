export const PAPER_THEME = [
    {
        id: 0,
        title: 'WHITE',
        style: {
            punched_color: '#16120F',
            paper_color: '#FDF6EC',
            text_color: '#1A1B1C',
            number_color: {
                fill: '#9974F8',
                stroke:'#16120F'
            }
        }
    },

    {
        id: 1,
        title: 'BLACK',
        style: {
            punched_color: '#FDF6EC',
            paper_color: '#16120F',
            paper_line_color: 'rgba(253, 246, 236, 0.60)',
            text_color: '#FDF6EC',
            number_color: {
                fill: '#C6F277',
                stroke: '#000000'
            }
        }
    },

    {
        id: 2,
        title: 'GREEN',
        style: {
            punched_color: '#16120F',
            paper_color: '#C6F277',
            text_color: '#1A1B1C',
            number_color: {
                fill: '#16120F',
                stroke: '#FDF6EC'
            }
        }
    },

    {
        id: 3,
        title: 'PURPLE',
        style: {
            punched_color: '#16120F',
            paper_color: '#9A73F9',
            text_color: '#1A1B1C',
            number_color: {
                fill: '#FDF6EC',
                stroke: '#16120F'
            }
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
