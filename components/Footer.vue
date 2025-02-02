<template>
  <footer>
    <div class="background-blur-color-footer"></div>
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
            <li>
              <a href="" target="_blank"
                ><font-awesome-icon :icon="['fab', 'x-twitter']"
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
  position: relative;
  width: 100%;
  height: auto;
}

.footer-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 10;
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
  transition: transform 0.2s ease;
}

.contact-logo ul li:hover {
  transform: translateY(-2px);
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

.background-blur-color-footer {
  position: absolute;
  top: 0;
  bottom: 0;
  aspect-ratio: 1.5;
  pointer-events: none;
  z-index: 0;
  border-radius: 100%;
  background: linear-gradient(270deg, #326ebd, #4582d1 60%, #22426b, #293241);
  filter: blur(15vw);
  transform: none;
  opacity: 0.6;
  width: 1400px;
  right: calc(50% - 700px);
}
</style>
