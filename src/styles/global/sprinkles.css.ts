import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const space = {
    none: 0,
    small: '10px',
    medium: '20px',
    large: '40px',
    big: '50px',
};

const responsiveProperties = defineProperties({
    properties: {
        marginTop: space,
        marginBottom: space,
        marginLeft: space,
        marginRight: space,
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
    },
});

const mainProperties = defineProperties({
    properties: {
        fontWeight: [300, 400, 500, 600, 700, 800, 900],
        display: ['none', 'flex', 'flex-inline', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
        verticalAlign: ['flex-start', 'center', 'flex-end', 'baseline'],
        flexWrap: ['wrap', 'nowrap'],
    },
    shorthands: {
        placeItems: ['justifyContent', 'alignItems'],
    },
});

const colors = {
    white: 'hsla(0, 0%, 100%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
    gray: 'hsla(0, 0%, 91%, 1)  ',
    green: 'hsla(145, 63%, 49%, 1)',
    whiteGreen: 'hsla(145, 100%, 89%, 1)',
    blue: 'hsla(193, 90%, 54%, 1)',
};

const gradients = {
    greenBlueTextGradient: 'linear-gradient(180deg, hsla(145, 63%, 49%, 1) 0%, hsla(193, 90%, 54%, 1) 100%)',
    greenBlueBlockGradient: 'linear-gradient(180deg, hsla(148, 63%, 49%, 1) 0%, hsla(192, 86%, 53%, 1) 100%)',
};

const colorProperties = defineProperties({
    properties: {
        color: colors,
        background: {
            ...colors,
            ...gradients,
        },
    },
});

export const sprinkles = createSprinkles(responsiveProperties, mainProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
