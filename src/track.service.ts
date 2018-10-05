import { Track } from '@/models/track';
import axios from 'axios';
import { MeetingViewModel } from '@/models/meetingviewmodel';
const api = 'https://localhost:5001/api';
export class TrackService {

  public getTracks() {
    return axios.get<MeetingViewModel>(`${api}/meetingtrack`);
  }
}

// Export a singleton instance in the global namespace
export const talkService = new TrackService();
