export const formFields = [
  {
    control: 'goal',
    fieldQuestion: 'What is your goal?',
  },
  {
    control: 'exercise',
    fieldQuestion: 'What is your exercise intensity?',
  },
];

export const goal = {
  control: 'goal',
  options: [
    {
      label: 'Lose Bodyfat',
      value: 'lose',
      selected: false,
      icon: 'male-outline',
    },
    {
      label: 'Maintain',
      value: 'maintain',
      selected: false,
      icon: 'male-outline',
    },
    {
      label: 'Build Muscle',
      value: 'gain',
      selected: false,
      icon: 'male-outline',
    },
  ],
};

export const exerciseSelect = [
  {
    title: 'None',
    value: 'none',
    secondary: null,
    options: null,
  },
  {
    title: 'Strength Training',
    value: 'strengthTraining',
    secondary: 'Intensity',
    options: [
      {label: 'Hard', value: 'hardStrength'},
      {label: 'Medium', value: 'mediumStrength'},
      {label: 'Easy', value: 'easyStrength'},
    ],
  },
  {
    title: 'Running',
    value: 'running',
    options: [
      {label: 'Hard', value: 'hardRun'},
      {label: 'Medium', value: 'mediumRun'},
      {label: 'Easy', value: 'easyRun'},
    ],
  },
  {
    title: 'Other',
    value: 'other',
    options: [
      {label: 'Hard', value: 'hardOther'},
      {label: 'Medium', value: 'mediumOther'},
      {label: 'Easy', value: 'easyOther'},
    ],
  },
];
