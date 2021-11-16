import { defineComponent } from "@nuxtjs/composition-api";
import { helpers, required } from "vuelidate/lib/validators";
const fullName = helpers.regex(
  "fullName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)(-[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]+)?$/
);
const firstName = helpers.regex(
  "firstName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/
);
const lastName = helpers.regex(
  "lastName",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/
);
const pesel = helpers.regex("pesel", /^[0-9]{11}$/);
const phone = helpers.regex("phone", /^([0-9]{7}|[0-9]{9})$/);
const email = helpers.regex(
  "email",
  /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$/
);
const streetName = helpers.regex("streetName", /^[0-9A-ZĄĆĘŁŃÓŚŹŻ][0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/);
const streetNr = helpers.regex(
  "streetNr",
  /^[0-9]+[a-zA-Z]?(\/?[0-9]*[a-zA-Z]?)?$/
);
const flatNr = helpers.regex("flat", /^[0-9]+[a-zA-Z]?$/);
const postCode = helpers.regex("postCode", /^[0-9]{2}-[0-9]{3}$/);
const city = helpers.regex(
  "city",
  /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/
);
export default defineComponent({
  validations: {
    fullName: {
      required,
      fullName,
    },
    student: {
      firstName: {
        firstName
      },
      lastName: {
        lastName
      },
      pesel: {
        pesel
      },
      phone: {
        phone
      },
      email: {
        email
      },
      address: {
        streetName: {
          streetName
        },
        streetNr: {
          streetNr
        },
        flatNr: {
          flatNr
        },
        postCode: {
          postCode
        },
        city: {
          city
        },
      },
      mother: {
        firstName: {
          firstName
        },
        lastName: {
          lastName
        },
        phone: {
          phone
        },
        email: {
          email
        },
      },
      father: {
        firstName: {
          firstName
        },
        lastName: {
          lastName
        },
        phone: {
          phone
        },
        email: {
          email
        },
      },
    },
  }
})
