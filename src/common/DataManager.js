class dataManager {
    constructor() {
        let data = null;
    }

    setDataLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }

    getDataLocalStorage = (key) => {
        let data = localStorage.getItem(key);
        if (data) {
            try {
                return JSON.parse(data); // Try to parse the JSON data
            } catch (e) {
                console.error("Failed to parse JSON:", e);
                return null; // Return null if parsing fails
            }
        }
        return null; // Return null if no data found
    };
    

    toggleForm(state) {
        return !state;
    }
}

export const DataManager = new dataManager();