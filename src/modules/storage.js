class LocalStorage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  saveData = (data) => {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  };

  loadData = () => {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  };
}

export default LocalStorage;
