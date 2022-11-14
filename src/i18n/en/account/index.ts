import type { BaseTranslation } from '../../i18n-types';

const enAccount: BaseTranslation = {
  noAccountSelected: 'Nobody',
  select: 'Select Account',
  avatarFor: 'Avatar for {0:string}',
  add: 'Add Account',
  management: 'Account Settings',
  modal: {
    label: 'Accounts',
    title: 'Add Account',
    gettingCode: 'Getting code...',
    start: 'Lets start! Click on the button to the right. Paste {0:string} at',
    startProcess: 'copy code and open in browser, and start process.',
    steps: [
      {
        label: 'Started process',
        description: 'You have started the process of adding an account'
      },
      {
        label: 'Recieved access token',
        description: 'Glowsquid has recieved the access token from Microsoft'
      },
      {
        label: 'Recieved account data',
        description: 'Glowsquid has recieved the account data from Microsoft'
      }
    ],
    cancel: 'Cancel'
  }
};

export default enAccount;
