<template>
  <div class="logInPanel px-9 pt-4 pb-3 position-absolute text-center">
    <form
      action="#"
      enctype="application/x-www-form-urlencoded"
      method="post"
      @submit.prevent="signIn"
    >
      <div class="form-group mb-4">
        <label for="login" class="mb-2">
          {{ $t("login") }}
          <span class="signInPanelTooltip ml-2">
            ({{ $t("pls_type_tip") }}: Login1)
          </span>
        </label>

        <input
          name="#"
          type="text"
          v-model.trim="login"
          autocomplete="off"
          id="login"
          class="text-center text-md-left pl-md-2"
        />
      </div>

      <div class="form-group mb-4">
        <label for="password" class="mb-2">
          {{ $t("password")
          }}<span class="signInPanelTooltip ml-2"
            >({{ $t("pls_type_tip") }}: Password1)</span
          >
        </label>

        <input
          name="#"
          type="password"
          v-model.trim="password"
          id="password"
          class="text-center text-md-left pl-md-2"
        />
      </div>

      <div class="form-group mb-4">
        <button class="p-1 col-10 col-md-8">
          {{ $t("sign_in") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "LoggedOutView",
  setup() {
    const login = ref("");
    const password = ref("");
    const { $http } = useContext();
    // useFetch(async () => {
    //   try{
    //     const x = await $http.$post(`/api/students/`, 
    //     { group: '3B' }
    //   )
    //   console.log(x);
    //   } catch (error) {
    //     const status = error.response;
    //     console.log('errorek', status);
    //     // switch (status) {
    //     //   case 404: {
    //     //     root.$toast.error(root.$t("failed_to_fetch_students_list"));
    //     //     break;
    //     //   }
    //     //   case 500: {
    //     //     root.$toast.error(root.$t("server_error"));
    //     //     break;
    //     //   }
    //     //   default: {
    //     //     root.$toast.error(root.$t("alternative_log_error"));
    //     //   }
    //     // }
    //   }
    // })
    async function signIn() {
      try {
        this.$toast.show(this.$t("logging_in_progress"));
        await this.$auth.loginWith("local", {
          data: {
            login: login.value,
            password: password.value,
          },
        });
        this.$toast.clear();
        this.$toast.success(this.$t("successed_logged"));
      } catch (error) {
        console.error(error);

        const statusCode = error.response.status;
        switch (statusCode) {
          case 401: {
            this.$toast.error(this.$t("login_and_password_must_match"));
            break;
          }
          case 404: {
            this.$toast.error(this.$t("user_not_found"));
            break;
          }
          case 500: {
            this.$toast.error(this.$t("server_error"));
            break;
          }
          default: {
            this.$toast.error(this.$t("alternative_log_error"));
          }
        }
      }
    }
    return {
      login,
      password,
      signIn,
    };
  },
});
</script>

<style lang="scss" scoped>
.logInPanel {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(@/assets/images/logo.png);
  background-position: center;
  background-size: cover;
  width: 340px;
  border-left: 2px solid #00c3ff;
  border-right: 2px solid #00c3ff;

  .form-group {
    filter: blur(0.44px);
    filter: sepia();
    opacity: 0.7;
    transition: all 0.12s linear;
    label {
      font-size: 13px;
      span.signInPanelTooltip {
        font-size: 11px;
      }
      & + input {
        height: 32px;
        width: 80%;
        max-width: 360px;
      }
    }
    button {
      font-size: 15px;
      background-color: deeppink;
      border: 2px solid black;
      border-radius: 7px;
    }
    &:hover {
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  .logInPanel {
    .form-group {
      label {
        span.signInPanelTooltip {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
