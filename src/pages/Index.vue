<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      {{page.node}}
    </div>

    <p class="home-links">
      <!-- <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a> -->
      <!-- <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a> -->
    </p>

  </Layout>
</template>

<page-query>
query {
	allGoogleSheet {
    edges {
      node {
        ID
        name,
        age,
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
