import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const space = {
    none: 0,
    small: '4px',
    medium: '8px',
    large: '16px',
};

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: {},
    },
    defaultCondition: 'desktop',
    properties: {
        display: ['none', 'flex', 'flex-inline', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
        verticalAlign: ['flex-start', 'center', 'flex-end', 'baseline'],
        flexWrap: ['wrap', 'nowrap'],
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        // etc.
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        placeItems: ['justifyContent', 'alignItems'],
    },
});

const colors = {
    white: 'hsla(0, 0%, 100%, 1)',
    green: 'hsla(145, 63%, 49%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
};

const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' },
    },
    defaultCondition: 'lightMode',
    properties: {
        color: colors,
        background: colors,
    },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
