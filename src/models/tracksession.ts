import { BaseModel } from '@/models/basemode';
import { Talk } from '@/models/talk';

export class TrackSession extends BaseModel {
    public sessionname!: string;
    public sessionduration!: string;
    public talks: Talk[] = [];
}
