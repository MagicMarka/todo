<template>
    <md-list-item>
        <md-toolbar>
        <md-checkbox :value="isDone" @change="toogleComplete(index)"></md-checkbox> 
        <div class="md-list-item-text">{{task.title}}</div>
        <md-button class="md-icon-button md-list-action" @click="deleteTask(task)">
            <md-icon class="md-primary">delete</md-icon>
        </md-button>
        </md-toolbar>
    </md-list-item>
</template>

<script>
import {mapActions} from 'vuex';

export default {

  data() {
    return {
    };
  },
  props: ['task', 'index'],
  computed: {
    isDone() {
        return !this.task.done
    }
  },
  methods: {
      ...mapActions(['deleteTask', 'toogleComplete']),
  },
};
</script>