<template>
  <div class="md-layout container">
    <div class="md-layout-item">
          <h2 class="md-headline">Add task</h2>
          <addTask></addTask>
          <h2 class="md-headline">Tasks list</h2>
          <md-list>
            <md-empty-state v-if="$store.state.tasks.length === 0"
                class="md-primary"
                md-icon="done"
                md-label="Nothing in Todo"
                md-description="Anything you add to list will be safely stored here.">
            </md-empty-state>
            <task v-for="(task, index) in $store.state.tasks" :task='task' :index='index' :key="task.title"></task>
          </md-list>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';
import AddTask from './AddTask';


export default {
  components: {
    AddTask,
    Task
  },
  data() {
    return {
  
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>