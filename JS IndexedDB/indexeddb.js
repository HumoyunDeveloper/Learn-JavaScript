class Database {
    constructor(_name, _version = 1) {
        this.name = _name;
        this.version = _version;
        this.db = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;
        this.state = false;
        this.alert = "";
    }

    create() {
        var db = this.db.open(this.name, this.version);
        db.onsuccess = (event) => {
            this.state = true;
        };
        db.onerror = (event) => {
            this.state = false;
        };
    }

    createStore(_storename, keyPath) {
        if (this.state === true) {
            this.db.createObjectStore(_storename, keyPath);
        } else {
            this.alert = "WARN:";
        }
    }

    add(_storename, _data) {
        if (this.state === true) {
            var tc = this.db.result;
            var store = tc.objectStore(_storename);
            store.add(_data);
        } else {

        }
    }
}