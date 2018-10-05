import { BaseModel } from '@/models/basemode';
import { Talk } from '@/models/talk';

export class TrackSession extends BaseModel {
    public sessionname: string | undefined;
    public sessionduration: string | undefined;
    public talks!: Talk[];
}
