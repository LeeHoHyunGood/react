export const storageHelper = {
  set: (key, object) => {
    if (!window.sessionStorage) return;
    window.sessionStorage.setItem(
      key,
      typeof object === "string" ? object : JSON.stringify(object)
    );
  },
  get: (key) => {
    if (!window.sessionStorage) return null;
    if (!window.sessionStorage.getItem(key)) return null;
    try {
      const parsed = JSON.parse(window.sessionStorage.getItem(key));
      return parsed;
    } catch (e) {
      return window.sessionStorage.getItem(key);
    }
  },
  remove: (key) => {
    if (!window.sessionStorage) return null;
    if (window.sessionStorage.getItem(key)) {
      window.sessionStorage.removeItem(key);
    }
  },
};

export default storageHelper;
