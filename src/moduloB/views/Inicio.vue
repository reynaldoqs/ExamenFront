<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button type="flat" radius="50%" icon="menu"></vs-button>

      <vs-navbar-title>
        Hello world
      </vs-navbar-title>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
      <vs-spacer></vs-spacer>
      <vs-input icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
        <h1>modulo b</h1>
    <vs-button color="primary" type="filled">Primary</vs-button>
    <vs-button color="success" type="filled">Success</vs-button>
    <vs-button color="danger" type="filled">Danger</vs-button>
    <vs-button color="warning" type="filled">Warning</vs-button>
    <vs-button color="dark" type="filled">Dark</vs-button>
    <vs-button color="rgb(134, 4, 98)" type="filled">RGB</vs-button>
    <vs-button disabled type="filled">Disabled</vs-button>
    <vs-button color="primary" type="filled" to="/components/list.html">Router</vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0,
    search: ""
  })
};
</script>
