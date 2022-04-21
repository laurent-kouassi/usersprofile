/* eslint-disable */
import { get } from './ajax';
import { BASE_AVATAR_URL, BASE_USERS_URL } from './env';

export function Services() {

    var that = this;

    this.getUsers = () => {
        return new Promise(async (resolve, reject) =>{
            return await get({
                url: BASE_USERS_URL + '/users'
            }).then(e => resolve(e))
              .catch(that.handleError.bind(null, reject));
        })
    };

    this.getAvatar = username => {
        return new Promise(async (resolve, reject) => {
            return await get({
                url: BASE_AVATAR_URL + `/${username}.svg?options[mood][]=happy`
            }).then(res => resolve(res))
              .catch(that.handleError.bind(null, reject));
        })
    };

    this.handleError = function (reject, response) {
        if (response.message === "Failed to fetch") {
            return reject({ message: "server_is_down" });
        }
        
        let entity = response.entity;

        if (response.status && response.status === 401) {
            return Promise.resolve(response);
        }

       return reject({ message: entity.message });
    };
};

// export default new Services();
/* eslint-disable */