//The user widget model from the relay starter kit translated into team and tasks
//Note that the viewer query is now called myTeam and actually makes sense only when a user is logged in and thus sees a subest of the data

// Model types
class Team {}
class Task {}

// Mock data
var myTeam = new Team();
myTeam.id = '1';
myTeam.name = 'IT';
myTeam.summary = 'The team that does this';

var tasks = [{
    id: 'qwe',
    name: 'Answer the phone',
    summary: 'Full disclosure here'
  }, {
    id: 'secondTaskId__',
    name: 'Wash the dishes',
    summary: 'The dishes should be wahes, lavando los teneodores, וגם לנקות את הרצפות'
  },
  {
    id: '6382020a',
    name: 'Throw up a holiday dinner',
    summary: 'Every passover lots of gay men do not have who to do the seder with so the Aguda throw up a big Seder. We need you to help us there'
  }, {
    id: '1',
    name: 'one uno task',
    summary: 'dsg dfgsd sdfgsdfg sdfgsdg'
  }, {
    id: '2',
    name: 'does deu two task',
    summary: 'ytry ertert wtrwetb uu'
  }
];

module.exports = {
  // Export methods that your schema can use to interact with your database
  getTeam: (id) => id === myTeam.id ? myTeam : null,
  getCurrentTeam: () => myTeam,
  getTask: (id) => tasks.find(t => t.id === id),
  getTasks: () => tasks,
  Team,
  Task,
};