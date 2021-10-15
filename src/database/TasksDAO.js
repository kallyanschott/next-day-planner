import db from './db'

export default class TasksDao {

    static getInstance() {
        return new TasksDao();
    }

    getAll() {
        return db.tasks.toArray();
    }

    insert(task) {
        return db.tasks.add(task);
    }

    update(task) {
        return db.tasks.put(task);
    }

    delete(id) {
        return db.tasks.delete(id);
    }

    getTodaysTasks() {
        let today = new Date();
        let startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        let endToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);
        return db.tasks.where('date').between(startToday, endToday).toArray();
    }

    getTomorrowsTasks() {
        let today = new Date();
        let startTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
        let endTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1, 23, 59, 59, 999);
        return db.tasks.where('date').between(startTomorrow, endTomorrow).toArray();
    }

    deleteOldTasks() {
        let today = new Date();
        let oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7, 23, 59, 59, 999);
        return db.tasks.where('date').below(oneWeekAgo).delete();
    }

    clearAllTasks() {
        return db.tasks.clear();
    }

}

