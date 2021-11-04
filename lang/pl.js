const phone_error = 'Dokładnie 7 lub 9 cyfr'
const email_error = 'nazwa@domena.pl'
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
  streetName: 'ulica',
  streetNr: 'numer budynku',
  flatNr: 'numer mieszkania',
  postCode: 'kod pocztowy',
  city: 'miasto',
  full_address: 'ul.{streetName} {streetNr} m.{flatNr} <br /> {postCode} {city}',
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
  phone_error,
  email_error,
  address_streetName_error: 'Bez znaków specjalnych',
  address_streetNr_error: 'Nr, Nr/Nr, Nr Litera np. 11 11/13 11A 11A/13B',
  address_streetFlat_error: 'Liczba + ew.litera np.116F',
  address_postCode_error: '_ _ - _ _ _',
  address_city_error: 'Bez i znaków specjalnych',
  mother_firstName_error: 'Możliwe drugie imię np. Anna Maria',
  mother_lastName_error: 'Brak cyfr i znaków specjalnych. Możliwe drugie nazwisko po myślniku np. Ćwierć-Parzącha',
  mother_phone_error: phone_error,
  mother_email_error: email_error,
  father_firstName_error: 'Możliwe drugie imię np. Jan Maria',
  father_lastName_error: 'Brak cyfr i znaków specjalnych. Możliwe drugie nazwisko po myślniku np. Ćwierć-Parzącha',
  father_phone_error: phone_error,
  father_email_error: email_error,

  fillname:'Uzupełnij imię i nazwisko',
  no_characters:'Bez cyfr i znaków specjalnych',


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
  adding_student_in_progress: 'Trwa dodawanie nowego ucznia',
  updating_student_data_in_progress: 'Trwa aktualizowanie danych ucznia w toku',
  
  successed_logged: 'Zalogowano pomyślnie. Trwa pobieranie danych...',
  successfully_added_new_student: 'Pomyślnie dodano nowego ucznia',
  successfully_updated_student_data: 'Pomyślnie zaktualizowano dane ucznia',

  failed_to_fetch_students_list: 'Nie udało się pobrać listy uczniów',
  failed_to_fetch_student_data: 'Nie udało się pobrać danych ucznia',
  failed_to_add_new_student: 'Nie udało się dodać nowego ucznia',
  failed_to_update_student_data: 'Nie udało się zaktualizować danych ucznia',
  failed_form_message: 'Operacja przerwana. W formularzu wystąpił błąd',
  
  login_and_password_must_match: 'Login i hasło muszą się zgadzać!',
  alternative_log_error: 'Błąd logowania',
  server_error: 'Błąd po stronie serwera',

  //Pages' titles
  logged_out_page_title: 'Librus - strona logowania',
  group_page_title: 'Librus - klasa {group}',
  student_page_title: 'Librus - uczeń {student}',
  student_add_page_title: 'Librus - dodawanie ucznia',
  student_edit_page_title: 'Librus - edycja ucznia {student}',
  error_page_title: 'Librus - błędny adres',
}
