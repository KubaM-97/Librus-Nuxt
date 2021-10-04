<template>
  <div class="signInPanel" ref="signInPanel">
    <form
      action="#"
      enctype="application/x-www-form-urlencoded"
      method="post"
      @submit.prevent="signIn"
    >
      <div class="form-group">
        <label for="login"> {{ $t("login") }}
            <span class="signInPanelTooltip"> ({{ $t("pls_type_tip") }}: Login1) </span>
        </label>

        <input name="#" type="text" id="login" autocomplete="off" />

        <span class="errorLoginPassword"></span>
      </div>

      <div class="form-group">
        <label for="password">
          {{ $t("password")
          }}<span class="signInPanelTooltip"
            >({{ $t("pls_type_tip") }}: Password1)</span
          >
        </label>

        <input name="#" type="password" id="password" />

        <span class="errorLoginPassword"></span>
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
import { defineComponent, computed, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "LoggedOutView",
  setup(_props, { root }) {
    const router = useRouter();
    async function signIn() {
const usergroup = computed(()=>root.$accessor.user.group)
      //  root.$accessor('fetchUser', { login, password });
      const signInPanel = this.$refs.signInPanel;
this.$toast.show("Logging in...");
 this.$toast.show('xxxxxxxxxxx')
        this.$toast.error('xxxxxxxxxxx')
        this.$toast.info('xxxxxxxxxxx')
        this.$toast.success('xxxxxxxxxxx')
        //  this.$toast.clear()
      //gets inserted login
      const login = signInPanel.querySelector("input[type=text]#login").value;

      //gets inserted password
      const password = signInPanel.querySelector('input[type=password]#password').value;

      try {
         this.$toast.show("Logging in...");
        const response = await root.$accessor.checkLogData({login, password});
        console.log(response, !!response, usergroup.value);

        // if (response) {
          router.push({
            path: "/group",
            query: { '': usergroup.value },
          });
        // }
      } catch (error) {
        console.error("Error", error);
        console.error("Error", error.response);
        console.error("Error", error.response.data);

        switch (error) {
          case 404: {
            this.$toast.error(this.$t("not_found_with_this_login"));
          }
          case 500: {
            this.$toast.error(this.$t("server_error"));
          }
          default: {
            const errors = signInPanel.querySelectorAll(
              "span.errorLoginPassword"
            );

            errors.map((error) => {
              error.innerHTML = this.$t("login_and_passw_must_match");
            });
          }
        }
      } finally {
       this.$toast.clear()
       }
        this.$toast.show('xxxxxxxxxxx')
        this.$toast.error('xxxxxxxxxxx')
        this.$toast.info('xxxxxxxxxxx')
        this.$toast.success('xxxxxxxxxxx')
        this.$toast.clear()
    }
    return {
      signIn
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
