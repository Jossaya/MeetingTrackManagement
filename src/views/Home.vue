<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MeetingTrackManagement/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MeetingTrackManagement from '@/components/MeetingTrackManagement.vue'; // @ is an alias to /src

@Component({
  components: {
    MeetingTrackManagement,
  },
})
export default class Home extends Vue {}
</script>
