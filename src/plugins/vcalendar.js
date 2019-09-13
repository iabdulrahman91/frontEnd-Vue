import Vue from 'vue';
import VCalendar from 'v-calendar';

Vue.use(VCalendar, {
    componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});
export default new VCalendar();
