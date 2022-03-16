import {
    ALPHABETICALLY,
    FETCH_ITEMS,
    FILTER_ITEMS,
    RELEASE,
    SORT_ITEMS
} from './actionTypes';

const INITIAL_STATE = {
    items: [],
    filteredItems: []
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ITEMS:
            return { 
                ...state, 
                items: payload, filteredItems: payload 
            };
        case FILTER_ITEMS:
            const itemsFilter = state.items.filter(item => (
                item?.platform.toLowerCase().includes(payload) || 
                item?.genre.toLowerCase().includes(payload) 
            ));
            return { 
                ...state,
                filteredItems: itemsFilter
            };
        case SORT_ITEMS:
            const elements = state.items;
            const sortedItems = elements.sort((a, b) => {
                let x = null;
                let y = null;
                switch (payload[0]) {
                    case ALPHABETICALLY:
                        x = a.title.toLowerCase();
                        y = b.title.toLowerCase();
                        break;
                    case RELEASE:
                        x = new Date(a?.release_date);
                        y = new Date(b?.release_date);
                        break;
                    
                    default:
                        break;
                }

                if(payload[1]) {
                    return x === y ? 0 : x < y ? -1 : 1;
                } else {
                    return x === y ? 0 : x > y ? -1 : 1;
                }

            });
            return { 
                ...state,
                filteredItems: sortedItems
            };
        default:
            return state;
    }
};
