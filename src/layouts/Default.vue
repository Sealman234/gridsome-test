<template>
  <div
    class="min-h-screen flex flex-col bg-default text-default transition-colors delay-100 ease-linear"
    :class="theme"
  >
    <div class="container max-w-screen-md mx-auto px-5">
      <header class="flex justify-between items-center mt-8 mb-12">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="flex">
          <div>
            <theme-switcher
              :theme="theme"
              @themeChanged="updateTheme"
            />
          </div>
          <g-link
            class="ml-6"
            to="/"
          >
            Home
          </g-link>
          <g-link
            class="ml-6"
            to="/about/"
          >
            About
          </g-link>
          <g-link
            class="ml-6"
            to="/blog/"
          >
            Blog
          </g-link>
        </nav>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher.vue';

export default {
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      theme: '',
    };
  },
  mounted() {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = userPrefersDark ? 'theme-dark' : '';
    this.updateTheme(localStorage.getItem('theme') || defaultTheme);
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
      localStorage.setItem('theme', theme);
    },
  },
};
</script>
