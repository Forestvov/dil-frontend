import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from './sprinkles.css';

export const flex = recipe({
    base: [sprinkles({ display: 'flex' })],

    variants: {
        justifyContent: {
            left: sprinkles({ justifyContent: 'flex-start' }),
            center: sprinkles({ justifyContent: 'center' }),
            right: sprinkles({ justifyContent: 'flex-end' }),
            between: sprinkles({ justifyContent: 'space-between' }),
            stretch: sprinkles({ justifyContent: 'stretch' }),
            around: sprinkles({ justifyContent: 'space-around' }),
        },
        alignItems: {
            start: sprinkles({ alignItems: 'flex-start' }),
            center: sprinkles({ alignItems: 'center' }),
            end: sprinkles({ alignItems: 'flex-end' }),
            base: sprinkles({ alignItems: 'stretch' }),
        },
        flexWrap: {
            wrap: sprinkles({ flexWrap: 'wrap' }),
            noWrap: sprinkles({ flexWrap: 'nowrap' }),
        },
        flexDirection: {
            row: sprinkles({ flexDirection: 'row' }),
            column: sprinkles({ flexDirection: 'column' }),
        },
    },

    defaultVariants: {
        justifyContent: 'stretch',
        alignItems: 'base',
        flexWrap: 'noWrap',
    },
});
