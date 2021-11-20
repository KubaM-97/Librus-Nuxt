<template>
  <header class="main-header" v-if="!loading">
   <header class="w-50 d-inline-block align-bottom">
      <div class="logo">
        <img src="~images/logo.png" />
      </div>

      <div class="logo">
        <div class="logo_info d-inline-block ml-2 ml-md-3">
          {{ $t("teacher") }}:
          <span v-header-directive="'italic'">
            {{ user.firstName }} {{ user.lastName }}
          </span>
        </div>
        <div class="logo_info d-inline-block ml-2 ml-md-3">
          {{ $t("group") }}:
          <span v-header-directive="'italic'">
            {{ user.group }}
          </span>
        </div>
      </div>
    </header>

    <nav class="d-inline-block align-bottom text-right">
      <NuxtLink :to="`/group/${$auth.$state.user.group}`">
        <button active-class="active" class="btn btn-primary btn-lg">
          {{ $t("class") }}
        </button>
      </NuxtLink>

      <NuxtLink to="/addStudent">
        <button active-class="active" class="btn btn-primary btn-lg">
          {{ $t("add_student") }}
        </button>
      </NuxtLink>

      <button
        class="btn btn-primary btn-lg with-logout-icon"
        @click="$auth.logout()"
      >
        <img
          class="pl-1 pl-md-0"
          src="~images/logout.png"
          alt="logout icon"
          height="20"
        />
        <span class="align-bottom">{{ $t("sign_out") }}</span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    user() {
      return this.$auth.$state.user;
    },
  },
  directives: {
    headerDirective(el, binding) {
      el.style.fontStyle = binding.value;
    },
  },
   data: () => ({
       loading: true
     }),
  created(){
     this.$nextTick(function () {
           this.loading = false
       })
  }
};
</script>

<style lang="scss">
header.main-header {
  width: 100%;
  filter: blur(0.44px);
  background-color: rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 3px 3px 30px 5px #00c3ff;
  -moz-box-shadow: 3px 3px 30px 5px #00c3ff;
  box-shadow: 3px 3px 30px 5px #00c3ff;
  padding: 10px 0 15px;
  font-size: 8.5px;
  .logo img {
    border-radius: 6px;
    height: 100px;
    vertical-align: bottom;
    margin: 5px 45px 10px 30px;
  }
}
nav {
  width: 47%;
  button.btn {
    background-color: rgba(0, 162, 255, 0.822);
    margin-right: 10px;
    font-size: 13px;
    padding: 8px 16px;
  }
  &.with-logout-icon {
    padding: 7px 18px 7px 15px;
    vertical-align: top;
  }
  &.active {
    background-color: rgba(15, 88, 223, 0.55);
  }
}
@media (max-width: 768px) {
  header {
    width: 55%;
    position: relative;
    .logo img {
      height: 100px;
    }
  }
  nav {
    width: 44%;
    float: right;
    position: absolute;
    bottom: 0;
    button.btn {
      display: inline-block;
      font-size: 11px;
      padding: 7px 11px;
      margin: 4px 5px;
    }
    img {
      height: 18px;
    }
  }
}
</style>