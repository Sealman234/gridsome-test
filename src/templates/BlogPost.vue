<template>
  <Layout>
    <h1 class="text-2xl text-strong font-semibold mb-2">
      {{ $page.post.title }}
    </h1>
    <p class="font-light mb-4 text-gray-700">
      {{ $page.post.date }}
    </p>
    <div
      v-if="$page.post.tags.length"
      class="flex flex-wrap mb-4 text-sm"
    >
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="bg-softer rounded-full px-2 py-1 mr-4 mb-4 text-strong hover:text-default hover:bg-soft"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <div
      class="mb-16 markdown"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style src="../css/markdown.css" />
