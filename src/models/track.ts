import { TrackSession } from '@/models/tracksession';
import { BaseModel } from '@/models/basemode';

export class Track extends BaseModel {
    public id!: string;
    public trackName!: string;
    public morningSession!: TrackSession;
    public afternoonSession!: TrackSession;
    // public Networking Networking;
}
