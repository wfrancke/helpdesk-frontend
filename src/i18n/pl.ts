export default {
  translation: {
    common: {
      firstName: 'Imię',
      lastName: 'Nazwisko',
      email: 'Email',
      password: 'Hasło',
      username: 'Nazwa użytkownika',
      phoneNumber: 'Numer telefonu',
      submit: 'Zatwierdź',
      title: 'Tytuł',
      description: 'Opis',
      priority: 'Priorytet',
      status: 'Status',
      send: 'Wyślij',
      edit: 'Edytuj',
      tags: 'Tagi',
      filingDate: 'Data zgłoszenia',
      finishDate: 'Data wykonania',
      comments: 'Komentarze',
      errors: {
        firstName: {
          required: 'Imię jest wymagane'
        },
        lastName: {
          required: 'Nazwisko jest wymagane'
        },
        email: {
          format: 'Niepoprawny format emaila',
          required: 'Email jest wymagany',
        },
        password: {
          min: 'Przynajmniej 8 znaków długości wymagane',
          required: 'Hasło jest wymagane'
        },
        confirmPassword: {
          dontMatch: 'Hasła się nie pokrywają',
          required: 'Powtórzenie hasła wymagane'
        },
        title: {
          required: 'Tytuł jest wymagany'
        }
      }
    },
    drawer: {
      myTickets: 'Moje zgłoszenia',
      assignedTickets: 'Przypisane zgłoszenia',
      teamTickets: 'Zgłoszenia zespołu',
      statistics: 'Statystyki',
      account: 'Konto',
      logOut: 'Wyloguj się'
    },
    login: {
      login: 'Zaloguj się',
      username: 'Nazwa użytkownika lub e-mail',
      forgot: 'Zapomniałem hasło',
      noAccount: 'Nie masz konta? '
    },
    register: {
      createAccount: 'Utwórz konto',
      register: 'Zarejestruj się',
      repeatPassword: 'Powtórz hasło',
      alreadyAccount: 'Masz już konto? ',
    },
    tickets: {
      myTickets: 'Moje zgłoszenia',
      assignedTickets: 'Przypisane zgłoszenia',
      teamTickets: 'Zgłoszenia zespołu',
      searchByTitle: 'Szukaj wg tytułu',
      sortByDate: 'Sortuj wg daty',
      sortByTitle: 'Sortuj wg tytułu',
      sortByPriority: 'Sortuj wg priorytetu',
      sortByStatus: 'Sortuj wg statusu',
      submit: 'Utwórz',
      addTag: 'Dodaj tag',
      comments: 'Komantarze',
      typeComment: 'Dodaj komentarz',
    },
    ticketList: {
      requester: 'Zgłaszający',
      assignee: 'Przypisany',
      critical: 'Krytyczny',
      high: 'Wysoki',
      low: 'Niski',
      closed: 'Zamknięte',
      open: 'Otwarte'
    },
    account: {
      editDetails: 'Edytuj dane konta',
      editLang: 'Zmień język',
      editPass: 'Zmień hasło',
      assign: 'Zapisz do zespołu',
      placeholder: 'Wybierz zespół',
      english: 'Angielski',
      polish: 'Polski',
      repeatPass: 'Powtórz hasło'
    },
  }
}