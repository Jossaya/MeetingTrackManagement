import { TrackSession } from '@/models/tracksession';
import { BaseModel } from '@/models/basemode';
import { Networking } from '@/models/networking';
import { LunchBreak } from '@/models/lunchbreak';

export class Track extends BaseModel {
    public id!: string;
    public trackName!: string;
    public morningSession: TrackSession = new TrackSession();
    public afternoonSession: TrackSession = new TrackSession();
    public networking: Networking = new Networking();
    public lunchbreak: LunchBreak = new LunchBreak();
}
