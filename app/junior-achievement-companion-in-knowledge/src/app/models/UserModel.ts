export default class UserModel {
    userid: number;
    username: string;
    points: number;
    is_teacher: number;

    constructor(data: {id: number, username: string, points: number, is_teacher: number}) {
        this.userid = data.id;
        this.username = data.username;
        this.points = data.points;
        this.is_teacher = data.is_teacher;
    }
}
