import UserModel from "./UserModel";

export default class CursoModel {
    id: number;
    name: string;
    schedule: string;
    participants: UserModel[];

    constructor(data: {id: number, name: string, schedule: string, participants?: UserModel[]}) {
        this.id = data.id;
        this.name = data.name;
        this.schedule = data.schedule;
        this.participants = data.participants != null ? data.participants : []
    }
}
