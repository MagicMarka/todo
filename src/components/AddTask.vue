<template>
      <md-toolbar>
         <md-field :class="!isValid ? 'md-invalid' : ''">
            <label>Enter new task</label>
            <md-input v-model="taskTitle" required></md-input>
            <span class="md-error" v-if="!isValid">Please enter task title first</span>
            <md-button class="md-icon-button md-list-action" @click="onTaskAdd()">
                <md-icon class="md-primary">add_task</md-icon>
            </md-button>
        </md-field>
      </md-toolbar>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
        return {
            taskTitle: '',  
            isValid: true
        };
  },
  methods: {
      onTaskAdd() {
          this.validate()
          if(this.isValid) {
            this.addTask(this.taskTitle);
            this.clearInput();
          }
      },
      validate() {
          this.taskTitle.length >  0 ? this.isValid = true : this.isValid = false;
      },
      clearInput() {
        this.taskTitle = ''
      },

      ...mapActions(['addTask']),
  },
}
</script>

<style scoped>
.md-toolbar .md-field {
  margin-bottom: 25px;
}
</style>