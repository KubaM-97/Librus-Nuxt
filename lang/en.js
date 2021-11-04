const phone_error = 'Excatly 7 or 9 numbers'
const email_error = 'name@domain.en'
export default {

  // Students' table
  legend: 'Legend',
  grade_with_weight: 'grade with weight of',
  number_abbr: 'No',
  student: 'Student',
  grades: 'Grades',
  grade_avg: 'Average Grade',
  avg: 'Average',
  at_risk: 'At risk',
  at_risks: 'At risks',

  // Students' grades
  grade_score: 'Grade',
  grade_weight: 'Grade\'s weight',
  grade_description: 'Grade\'s description',
  remove: 'Remove',
  characters_left_many: `{characters} characters left`,
  characters_left_one: `{characters} characters left`,
  characters_left_few: `{characters} characters left`,
  edit_grade: 'Edit grade',
  edit_remove_grade: 'Edit / Remove grade',
  accumulated_grades: 'Accumulated grades',

  // Student's data
  students_first_and_lastname: 'Student\'s First name and Last name',
  firstName: 'First name',
  lastName: 'Last name',
  firstName_and_lastName: 'First Name and Last Name',
  double_lastNames_hint: 'Double Last Names with dash',
  additional_info: 'Additional info',
  expand: 'Expand',
  collapse: 'Collapse',
  enter_correct_format: 'Enter correct format',
  no_description: 'NO DESCRIPTION',
  description: 'Description',
  date: 'Date',
  address: 'Address',
  pesel: 'Pesel',
  phone: 'Phone',
  email: 'Email',
  mother: 'Mother',
  father: 'Father',
  edit_data: 'Edit data',
  edit_grades: 'Edit grades',
  save_changes: 'Save changes',
  cancel: 'Cancel',

  streetName: 'street',
  streetNr: 'no',
  flatNr: 'flat',
  postCode: 'ZIP code',
  city: 'city',
  full_address: 'St.{streetName} {streetNr} m.{flatNr} <br /> {postCode} {city}',

  //Errors
  pesel_error: 'Excatly 11 numbers',
  phone_error,
  email_error,
  address_streetName_error: 'No numbers or special characters',
  address_streetNr_error: 'No, No/No, No Letter eg. 11 11/13 11A 11A/13B',
  address_streetFlat_error: 'Number + possibly a letter eg.116F',
  address_postCode_error: '_ _ - _ _ _',
  address_city_error: 'No numbers or special characters',
  mother_firstName_error: 'Possibly a second name eg. Natalie Portman',
  mother_lastName_error: 'No numbers or special characters. Possibly a second name after dash eg. Ćwierć-Parzącha',
  mother_phone_error: phone_error,
  mother_email_error: email_error,
  father_firstName_error: 'Possibly a second name eg. John Paul',
  father_lastName_error: 'No numbers or special characters. Possibly a second name after dash eg. Ćwierć-Parzącha',
  father_phone_error: phone_error,
  father_email_error: email_error,

  fillname: 'Fill first and last name',
  no_characters: 'No numbers or special characters',

  // Close prompt
  close_warning: 'Are you sure? Your data will be lost...',
  close_quit: 'Quit',
  close_stay: 'Stay',

  // Header
  teacher: 'Teacher',
  group: 'Group',
  class: 'Class',
  add_student: 'Add student',
  sign_out: 'Sign out',

  // LoggedOutView
  login: 'Login',
  password: 'Password',
  pls_type_tip: 'Please type',
  sign_in: 'Sign in',

  // Toasts
  logging_in_progress: 'Logging in progress...',
  adding_student_in_progress: 'Adding student in progress...',
  updating_student_data_in_progress: 'Updating student\'s in progress...',

  successed_logged: 'Logged with success. Fetching data in progress...',
  successfully_added_new_student: 'Successfully added a new student',
  successfully_updated_student_data: 'Successfully updated student\'s data',

  failed_to_fetch_students_list: 'Failed to fetch students\'s list',
  failed_to_fetch_student_data: 'Failed to fetch student data',
  failed_to_add_new_student: 'Failed to add a new student',
  failed_to_update_student_data: 'Failed to update student\'s data',
  failed_form_message: 'Operation has been stopped. An error occured in the form',

  login_and_password_must_match: 'Login and password must match!',
  alternative_log_error: 'Log error',
  server_error: 'Occured an error on server side',

  //Pages' titles
  logged_out_page_title: 'Librus - logging page',
  group_page_title: 'Librus - group {group}',
  student_page_title: 'Librus - student {student}',
  student_add_page_title: 'Librus - add student',
  student_edit_page_title: 'Librus - edit student {student}',
  error_page_title: 'Librus - error page',
}
