<template>
  <div class="signInPanel" ref="signInPanel">
    <form
      action="#"
      enctype="application/x-www-form-urlencoded"
      method="post"
      @submit.prevent="signIn"
    >
      <div class="form-group">
        <label for="login">
          {{ $t("login") }}
          <span class="signInPanelTooltip">
            ({{ $t("pls_type_tip") }}: Login1)
          </span>
        </label>

        <input
          name="#"
          type="text"
          v-model.trim="login"
          autocomplete="off"
          id="login"
        />

        <span class="errorLoginPassword" v-if="showError">{{
          $t("login_and_password_must_match")
        }}</span>
      </div>

      <div class="form-group">
        <label for="password">
          {{ $t("password")
          }}<span class="signInPanelTooltip"
            >({{ $t("pls_type_tip") }}: Password1)</span
          >
        </label>

        <input name="#" type="password" v-model.trim="password" id="password" />
        <span class="errorLoginPassword" v-if="showError">{{
          $t("login_and_password_must_match")
        }}</span>
      </div>

      <div class="form-group">
        <button>
          {{ $t("sign_in") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api";

import axios from "axios";
export default defineComponent({
  name: "LoggedOutView",
  setup() {
    const router = useRouter();
    const login = ref("");
    const password = ref("");
    const signInPanel = ref(null);
    const showError = ref(false);
    async function signIn() {
      try {
        this.$toast.show(this.$t("logging_in_progress"));
        const response = await axios.post("/api/users/", {
          login: login.value,
          password: password.value,
        });
        // if (1!==2) showError.value = true
        this.$toast.clear();
        this.$toast.success(this.$t("successed_logged"));
        router.push({
          path: `/group/${response.data.group}`,
          params: { groupId: response.data.group },
        });
      } catch (error) {
        switch (error) {
          case 404: {
            this.$toast.error(this.$t("not_found_user_with_this_login"));
          }
          case 500: {
            this.$toast.error(this.$t("server_error"));
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
      signInPanel,
      signIn,
      showError,
    };
  },
});
</script>

<style scoped>
.signInPanel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(../assets/images/Logo.png);
  background-position: center;
  background-size: cover;
  padding: 35px 18px;
  text-align: center;
  width: 340px;
  border-left: 2px solid #00c3ff;
  border-right: 2px solid #00c3ff;
}

.signInPanel .form-group {
  font-size: 15px;
  margin-bottom: 45px;
  filter: blur(0.44px);
  filter: sepia();
  opacity: 0.7;
}

.signInPanel .form-group:hover {
  opacity: 1;
}

.signInPanel .form-group label {
  margin-bottom: 16px;
  font-size: 13px;
}

.signInPanel .form-group label span.signInPanelTooltip {
  font-size: 11px;
  margin-left: 20px;
}

.signInPanel .form-group label + input {
  height: 32px;
  width: 95%;
  max-width: 360px;
  text-align: left;
  padding-left: 15px;
}

.signInPanel .form-group button {
  background-color: deeppink;
  padding: 10px;
  border: 2px solid black;
  border-radius: 7px;
  width: 80%;
  margin-top: 20px;
}

.signInPanel span.errorLoginPassword,
.form-group span.required {
  margin-top: 10px;
  display: block;
  font-size: 12px;
}

@media (max-width: 768px) {
  .signInPanel .form-group {
    font-size: 16px;
  }
  .signInPanel .form-group label span.signInPanelTooltip {
    font-size: 14px;
  }
  .signInPanel .form-group label + input {
    height: 28px;
    width: 75%;
  }
}
</style>
