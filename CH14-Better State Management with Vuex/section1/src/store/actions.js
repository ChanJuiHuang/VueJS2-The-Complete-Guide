import * as types from './types';

export default {
    [types.UPDATE_VALUE]: (context, payload) => {
        console.log(context);
        context.commit(types.MUTATE_UPDATE_VALUE, payload);
    }
};

