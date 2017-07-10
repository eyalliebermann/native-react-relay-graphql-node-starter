//The user widget model from the relay starter kit translated into team and tasks
//Note that the viewer query is now called currentTeam and actually makes sense only when a user is logged in and thus sees a subest of the data

// Model types
class Team {}
class Task {}

// Mock data
var currentTeam = new Team();
currentTeam.id = '1';
currentTeam.name = 'The white line';

var tasks = ['Answer the phone', 'Wash the dishes', 'Throw up a holiday dinner'].map((name, i) => {
  var task = new Task();
  task.name = name;
  task.id = `${i}`;
  return task;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getTeam: (id) => id === currentTeam.id ? currentTeam : null,
  getCurrentTeam: () => currentTeam,
  getTask: (id) => tasks.find(t => t.id === id),
  getTasks: () => tasks,
  Team,
  Task,
};
