<template>
  <Layout>
    <h1 class="text-2xl text-strong font-semibold mb-5">
      海豹人的第一個家
    </h1>

    <ul class="list-outside list-disc">
      <li
        v-for="post in $page.posts.edges"
        :key="post.path"
        class="mt-3"
      >
        <g-link :to="post.node.path">
          {{ post.node.title }} – {{ post.node.date }}
        </g-link>
      </li>
    </ul>
    <div class="pagination">
      <Pager
        :info="$page.posts.pageInfo"
        link-class="paging"
        prev-label="Prev"
        next-label="Next"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allBlogPost (perPage: 2, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
  components: {
    Pager,
  },
};
</script>

<style src="./../css/pagination.css" />
