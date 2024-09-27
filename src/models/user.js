import {USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE} from "../../mock/data.js";
class User {
    constructor({ id, userInfos, todayScore, keyData }) {
        this.id = id;
        this.firstName = userInfos.firstName;
        this.lastName = userInfos.lastName;
        this.age = userInfos.age;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }
}

class Activity {
    constructor({ userId, sessions }) {
        this.userId = userId;
        this.sessions = sessions.map(session => new Session(session));
    }
}

class Session {
    constructor({ day, kilogram, calories }) {
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories;
    }
}

class AverageSession {
    constructor({ userId, sessions }) {
        this.userId = userId;
        this.sessions = sessions.map(session => new SessionLength(session));
    }
}

class SessionLength {
    constructor({ day, sessionLength }) {
        this.day = day;
        this.sessionLength = sessionLength;
    }
}

class Performance {
    constructor({ userId, kind, data }) {
        this.userId = userId;
        this.kind = kind;
        this.data = data.map(d => new PerformanceData(d, kind));
    }
}

class PerformanceData {
    constructor({ value, kind }, kindLookup) {
        this.value = value;
        this.kind = kindLookup[kind];
    }
}

class DataMock{
    constructor(url) {
        const [http, blank, domain, object, id, key] = url.split('/');
        this.object = object;
        this.key = key;
        this.id = id;
        this.url = url;
    }

    async getData(){
        const data = await this.#getDataById();
        if(!data)
            return;
         switch (this.key) {
            case 'performance':
                return new Performance(data);
            case 'average-sessions':
                return new AverageSession(data);
            case 'activity':
                return new Activity(data);
            default:
                return new User(data);
        }
    }

    async #getDataById(){
        const datas = await this.#getDataTypeByKey();
        if(!this.id || !datas)
            return;
        if (__DEV_MODE__ === 'false') {
            return datas;
        }
        return datas.find(object => {
            if(object.id)
                return object.id == this.id;
            else if(object.userId)
                return object.userId == this.id;
            else
                return false;
        });
    }

    async #getDataTypeByKey() {
        if (__DEV_MODE__ === 'false') {
            return await this.#fetchDataFromAPI();
        }
        if(this.object !== 'user')
            return;
        switch (this.key) {
            case 'performance':
                return USER_PERFORMANCE;
            case 'average-sessions':
                return USER_AVERAGE_SESSIONS;
            case 'activity':
                return USER_AVERAGE_SESSIONS;
            case '':
                return USER_MAIN_DATA;
            case undefined:
                return USER_MAIN_DATA;
            default:
                return false;
        }
    }
    async #fetchDataFromAPI() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.data;
        } catch (err) {
            console.error("Erreur lors de la récupération des données de l'API:", err);
            return null;
        }
    }
}

export {DataMock}