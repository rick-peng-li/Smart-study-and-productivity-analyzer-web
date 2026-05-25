const activeSession = {
  isRunning: true,
  time: "00:45:12"
};

const sessionDetails=[
    {goal: 1.5 , distraction:2 , total: 3.5},
    {goal:1 , distraction: 0.5 , total: 1.5},
    {goal: 2 , distraction: 1 , total: 3},
    {goal: 1.5 , distraction: 0.5 , total: 2},
    {goal: 2 , distraction: 0.5 , total: 2.5},
];

const timer={
    activeSession,
    sessionDetails
};
 export default timer;