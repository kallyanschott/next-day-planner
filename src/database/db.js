import Dexie from 'dexie';

const db = new Dexie('tasksDB');

db.version(1).stores({
    tasks: '++id, name, date'
});

export default db;