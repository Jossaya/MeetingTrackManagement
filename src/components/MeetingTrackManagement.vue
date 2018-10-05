<template>
  <div>
    <h1>ScrummIT</h1>
    <Split style="height: 800px;">
    <SplitArea :size="50">
         <h4>Input </h4>
          <div v-if="meetingviewmodel.testInput && meetingviewmodel.testInput.length">
            <div v-for="talk in meetingviewmodel.testInput" :key="talk">
                <p style="text-align:left">   ---{{talk}} </p>
            </div>
          </div>
    </SplitArea>
    <SplitArea :size="50">
          <h4>Output</h4>
       <div v-if="meetingviewmodel.testOutput.tracks && meetingviewmodel.testOutput.tracks.length">
        <div v-for="track in meetingviewmodel.testOutput.tracks" :key="track.id">
            <h4 style="text-align:left"> {{track.trackName}}</h4>
             <div v-for="morningtalk in track.morningSession.talks" :key="morningtalk.id">
               <!-- currentTime, talk.title, talk.Duration.Value, talk.Duration.Unit -->
                <p style="text-align:left">   ---{{morningtalk.start}} {{morningtalk.title}} </p>
            </div>
            <!-- track.LunchBreak.Title, track.LunchBreak.StartTime,track.LunchBreak.EndTime -->
            <p style="text-align:left">   ---{{track.lunchBreak.start}} {{track.lunchBreak.title}} </p>
            <div v-for="afternoontalk in track.afternoonSession.talks" :key="afternoontalk.id">
                  <!-- currentTime, talk.title, talk.Duration.Value, talk.Duration.Unit -->
                    <p style="text-align:left">   ---{{afternoontalk.start}} {{afternoontalk.title}} </p>
            </div>
            <!-- streamWriter.WriteLine("{0}\t{1}", track.Networking.Title, track.Networking.StartTime); -->
               <p style="text-align:left">   ---{{track.networking.start}} {{track.networking.title}} </p>
        </div>
      </div>

    </SplitArea>
</Split>
      

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { talkService } from '../track.service';
import { Track } from '../models/track';
import { MeetingViewModel } from '@/models/meetingviewmodel';
@Component
export default class TalkTrackManagement extends Vue {
  private meetingviewmodel: MeetingViewModel = new MeetingViewModel();
  constructor() {
    super();
    this.getTracks();
  }
  public getTracks() {
    return talkService.getTracks().then((response) => {this.meetingviewmodel = response.data; });
  }
}
</script>

