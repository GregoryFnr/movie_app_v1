<template>
  <footer>
    <div class="footer-container">
      <div class="footer-contact">
        <h2>Follow me on</h2>
        <div class="contact-logo">
          <ul>
            <li>
              <a href="https://github.com/GregoryFnr" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gregory-fnr/" target="_blank"
                ><font-awesome-icon :icon="['fab', 'linkedin']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>Created by Gregory.</p>
        <div class="tmdb">
          <p>Data provided by</p>
          <a href="https://www.themoviedb.org/" target="_blank"
            ><img src="/public/logo_tmdb.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab);
</script>
<style scoped>
footer {
  width: 100%;
  height: auto;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
}

.footer-contact {
  width: auto;
  margin-bottom: 25px;
}

.footer-contact h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

.contact-logo ul {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 35px;
}

.contact-logo ul li {
  list-style: none;
}

.contact-logo ul li,
.contact-logo ul li a {
  color: #fff;
  font-size: 1.88rem;
}

.copyright {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 4px;
  font-size: 0.88rem;
}

.tmdb {
  display: flex;
  gap: 4px;
  font-size: 0.88rem;
}

.tmdb img {
  width: 150px;
}
</style>
