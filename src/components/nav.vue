<template>
  <div id="main_nav">
    <!-- <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-main">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">
          Weather Plus +
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                aria-current="page"
                >天氣預報
              </router-link>
              <!-- <a class = "nav-link active" aria-current = "page" href = "#"> 天氣預報 </a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> 關於我們 </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                其他功能
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"> Action </a></li>
                <li><a class="dropdown-item" href="#"> Another action </a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#"> Something else here </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >開發中</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-default" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "main-nav",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/main.scss";
.router-link-active {
  color: rgba(0,0,0,.55);
}
// color: rgba(0,0,0,.55);
</style>
