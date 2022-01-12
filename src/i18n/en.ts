export default {
  translation: {
    common: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      password: 'Password',
      username: 'Username',
      phoneNumber: 'Phone number',
      submit: 'Submit',
      title: 'Title',
      description: 'Description',
      priority: 'Priority',
      status: 'Status',
      send: 'Send',
      edit: 'Edit',
      tags: 'Tags',
      filingDate: 'Filing date',
      finishDate: 'Finish date',
      comments: 'Comments',
      errors: {
        firstName: {
          required: 'First name is required'
        },
        lastName: {
          required: 'Last name is required'
        },
        email: {
          format: 'Incorrect email format',
          required: 'Email is required',
        },
        password: {
          min: '8 characters minimum',
          required: 'Password is required'
        },
        confirmPassword: {
          dontMatch: 'Passwords don\'t match',
          required: 'Confirmation required'
        },
        title: {
          required: 'Title is required'
        }
      }
    },
    drawer: {
      myTickets: 'My tickets',
      assignedTickets: 'Assigned tickets',
      teamTickets: 'Team tickets',
      statistics: 'Statistics',
      account: 'Account',
      logOut: 'Log out'
    },
    login: {
      login: 'Login',
      username: 'Username or E-mail',
      forgot: 'Forgot password?',
      noAccount: 'Don\'t have an account? ',
    },
    register: {
      createAccount: 'Create Account',
      register: 'Register',
      repeatPassword: 'Repeat password',
      alreadyAccount: 'Already have an account? ',
    },
    tickets: {
      myTickets: 'My tickets',
      assignedTickets: 'Assigned tickets',
      teamTickets: 'Team tickets',
      searchByTitle: 'Search by title',
      sortByDate: 'Sort by date',
      sortByTitle: 'Sort by title',
      sortByPriority: 'Sort by priority',
      sortByStatus: 'Sort by status',
      submit: 'Submit',
      addTag: 'Add tag',
      comments: 'Comments',
      typeComment: 'Type comment',
      selectAuto: 'Select automatically'
    },
    ticketList: {
      requester: 'Requester',
      assignee: 'Assignee',
      critical: 'Critical',
      high: 'High',
      low: 'Low',
      closed: 'Closed',
      open: 'Open'
    },
    account: {
      editDetails: 'Edit details',
      editLang: 'Change language',
      editPass: 'Change password',
      assign: 'Assign to a team',
      placeholder: 'Select a team',
      en: 'English',
      pl: 'Polish',
      repeatPass: 'Repeat password'
    },
    stats: {
      closedOverall: 'Closed tickets',
      closedLow: 'Closed tickets with low priority',
      closedHigh: 'Closed tickets with high priority',
      closedCritical: 'Closed tickets with critical priority',
      openOverall: 'Open Tickets',
      openLow: 'Open tickets with low priority',
      openHigh: 'Open tickets with high priority',
      openCritical: 'Open tickets with critical priority',
      speedOverall: 'Average completion of tickets (in days)',
      speedLow: 'Average completion of tickets with low priority',
      speedHigh: 'Average completion of tickets with high priority',
      speedCritical: 'Average completion of tickets with critical priority',
    }
  }
}