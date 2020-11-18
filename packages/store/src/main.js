import Vue from 'vue';

const App = {
  render: (h) => h('div', 'This text should be rendered only in /'),
};

new Vue({
  render: (h) => h(App),
}).$mount('#app');
