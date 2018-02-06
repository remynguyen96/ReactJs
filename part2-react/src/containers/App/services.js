import {fetchApi} from '../../utils/helper';
import Api from '../../utils/api';

export const loginApi = async (infoUser) => {
    return await fetchApi({
        url: Api.login,
        body: JSON.stringify(infoUser),
        method: 'POST',
    });
};
