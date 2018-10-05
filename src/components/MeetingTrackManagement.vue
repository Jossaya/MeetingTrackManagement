<template>
  <div>
    <h1>ScrummIT basic development assessment</h1>
      <div v-if="tracks && tracks.length">
        <div v-for="track in tracks" :key="track.id">
            <p style="text-align:left"> {{track.trackName}}</p>
             <div v-for="talk in track.morningSession.talks" :key="talk.id">
                <p style="text-align:left">------------------- {{talk.title}} </p>
              </div>
         
        </div>
      </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { talkService } from '../track.service';
import { Track } from '../models/track';
@Component
export default class TalkTrackManagement extends Vue {
 private tracks: Track[] = [];
 constructor() {
    super();
    this.getTracks();
  }
 public getTracks() {
    this.tracks = [];
    return talkService.getTracks().then((response) => { this.tracks = response.data; });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.button-group {
  margin: 0.5em;
}
button.delete-button {
  background-color: rgb(216, 59, 1);
  color: white;
  padding: 4px;
  position: relative;
  font-size: 12px;
  max-width: 50px;
}
.selected {
  background-color: rgb(0, 120, 215) !important;
  color: white;
}
.trackes {
  float: left;
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 20em;
  li {
    cursor: pointer;
    position: relative;
    background-color: #f7f7f7;
    margin: 0.5em;
    height: 3.2em;
    border-radius: 4px;
    &:hover {
      color: #607d8b;
      color: rgb(0, 120, 215);
      background-color: #ddd;
      left: 1px;
    }
    &.selected:hover {
      color: white;
    }
  }
  .text {
    position: relative;
    top: -3px;
  }
  .saying {
    margin: 5px 2.3px;
  }
  .title {
    font-weight: bold;
  }
  .track-container {
    display: flex;
    flex-flow: row wrap;
  }
  > * {
    flex: 1 100%;
  }
  .track-element {
    display: flex;
    flex-flow: row wrap;
    flex: 18 auto;
    order: 1;
    padding: 0;
    margin: 0;
  }
  .delete-button {
    flex: 1 auto;
    order: 2;
    border-radius: 0 4px 4px 0;
  }
  .track-text {
    flex: 1 auto;
    order: 2;
    padding: 0.2em 0.5em;
  }
  .badge {
    flex: 1 auto;
    order: 1;
    font-size: small;
    color: #ffffff;
    padding: 1.2em 1em 0em 1em;
    background-color: #607d8b;
    background-color: rgb(0, 120, 215);
    background-color: rgb(134, 183, 221);
    margin: 0em 0em 0em 0em;
    border-radius: 4px 0 0 4px;
    max-width: 1.5em;
  }
}
</style>