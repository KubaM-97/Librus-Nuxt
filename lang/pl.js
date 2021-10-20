export default {

  // Students' table
  legend: 'Legenda',
  grade_with_weight: 'ocena z wagą',
  number_abbr: 'Nr',
  student: 'Uczeń',
  grades: 'Oceny',
  grade_avg: 'Średnia ocen', 
  avg: 'Średnia',
  at_risk: 'Zagrożenie',
  at_risks: 'Zagrożenia',

  // Students' grades
  grade_score: 'Ocena',
  grade_weight: 'Waga oceny',
  grade_description: 'Opis oceny',
  remove: 'Usuń',
  characters_left_many: `Pozostało {characters} znaków`,
  characters_left_one: `Pozostał: {characters} znak`,
  characters_left_few: `Pozostały {characters} znaki`,
  edit_grade: 'Edycja ocen',
  edit_remove_grade: 'Edytuj / Dodaj ocenę',
  accumulated_grades: 'Dotychczasowe oceny',

  // Student's data
  students_first_and_lastname: 'Imię i Nazwisko ucznia',
  firstName: 'Imię',
  lastName: 'Nazwisko',
  firstName_and_lastName: 'Imię i Nazwisko',
  double_lastNames_hint: 'Podwójne nazwiska przy pomocy myślnika',
  additional_info: 'Informacje dodatkowe',
  expand: 'Rozwiń',
  collapse: 'Zwiń',
  enter_correct_format: 'Podaj prawidłowy format',
  no_description: 'BRAK OPISU',
  description: 'Opis',
  date: 'Data',
  address: 'Adres',
  street: 'Adres',
  // full_address: `ul.{address.streetName} {address.streetNr} m.{address.streetFlat} <br>  {address.streetPostcode} {address.streetCity}`,
  // full_address: 'ul.{address.name} {address.nr} m.{address.flat} \n  {address.postcode} {address.city}',
  full_address: '{addressname.name}.{addressname->name}',
  pesel: 'Pesel',
  phone: 'Telefon',
  email: 'Email',
  mother: 'Matka',
  father: 'Ojciec',
  edit_data: 'Edytuj dane',
  edit_grades: 'Edytuj oceny',
  save_changes: 'Zapisz zmiany',
  cancel: 'Anuluj',

  //Errors
  pesel_error: 'Dokładnie 11 cyfr',
  phone_error: 'Dokładnie 7 lub 9 cyfr',
  email_error: 'nazwa@domena.pl',
  street_name_error: 'Bez znaków specjalnych',
  street_nr_error: 'Nr, Nr/Nr, Nr Litera np. 11 11/13 11A 11A/13B',
  street_flat_error: 'Liczba + ew.litera np.116F',
  street_postcode_error: '_ _ - _ _ _',
  street_city_error: 'Bez i znaków specjalnych',
  first_name_error: 'Możliwe drugie imię np. Jan Maria',
  last_name_error: 'Brak cyfr i znaków specjalnych. Możliwe drugie nazwisko po myślniku np. Ćwierć-Parzącha',


  // Close prompt
  close_warning: 'Na pewno? Dane zostaną utracone...',
  close_quit: 'Wychodzę',
  close_stay: 'Zostaję',

  // Header
  teacher: 'Nauczyciel',
  group: 'Klasa',
  class: 'Klasa',
  add_student: 'Dodaj ucznia',
  sign_out: 'Wyloguj się',

  // LoggedOutView
  login: 'Login',
  password: 'Hasło',
  pls_type_tip: 'Proszę wpisać',
  sign_in: 'Zaloguj się',

  // Toasts
  logging_in_progress: 'Trwa logowanie...',
  successed_logged: 'Zalogowano pomyślnie. Trwa pobieranie danych...',
  login_and_password_must_match: 'Login i hasło muszą się zgadzać!',
  not_found_user_with_this_login: 'Nie znaleziono użytkownika z takim loginem',
  server_error: 'Błąd po stronie serwera',
  alternative_log_error: 'Błąd logowania',

  successfully_added_new_student: 'Pomyślnie dodano nowego ucznia',
  successfully_updated_student_data: 'Pomyślnie zaktualizowano dane ucznia',

  failed_to_fetch_students_list: 'Nie udało się pobrać listy uczniów',
  failed_to_add_new_student: 'Nie udało się dodać nowego ucznia',
  failed_to_update_student_data: 'Nie udało się zaktualizować danych ucznia',



  fillname:'Uzupełnij imię i nazwisko',
  no_characters:'Bez cyfr i znaków specjalnych',
}
