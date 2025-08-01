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
        <p>Developed by Gregory.</p>
        <div class="tmdb">
          <p>API & data from</p>
          <a href="https://www.themoviedb.org/" target="_blank"
            ><img src="/public/logo_tmdb.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

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
  padding: 35px 15px 15px 15px;
}

.footer-contact {
  width: auto;
  margin-bottom: 50px;
}

.footer-contact h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
}

.contact-logo ul {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact-logo ul li {
  list-style: none;
}

.contact-logo ul li svg {
  padding: 10px;
  border-radius: 5px;
}

.contact-logo ul li svg:hover {
  background-color: var(--bg-component-hover);
}

.contact-logo ul li,
.contact-logo ul li a {
  color: #fff;
  font-size: 1.5rem;
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

/*BREAKPOINTS */
@media (max-width: 1200px) {
  .background-blur-color-footer {
    width: 700px;
    right: calc(30% - 200px);
  }
  .footer-contact h2 {
    font-size: 1.3rem;
  }
  .contact-logo ul li a {
    font-size: 1.3rem;
  }
  .footer-contact h2 {
    margin-bottom: 4px;
  }
}

@media (max-width: 768px) {
  .background-blur-color-footer {
    width: 600px;
    right: calc(50% - 200px);
  }
  .footer-contact h2 {
    font-size: 1.2rem;
  }
  .contact-logo ul li a {
    font-size: 1.2rem;
  }
  .footer-contact h2 {
    margin-bottom: 4px;
  }
}

@media (max-width: 640px) {
  .background-blur-color-footer {
    width: 400px;
    right: calc(50% - 200px);
    filter: blur(20vw);
  }
  .footer-contact h2 {
    font-size: 1.2rem;
  }
  .contact-logo ul li a {
    font-size: 1.2rem;
  }
  .contact-logo ul {
    gap: 5px;
  }
  .footer-contact h2 {
    margin-bottom: 4px;
  }
}

@media (max-width: 480px) {
  .background-blur-color-footer {
    width: 300px;
    right: calc(50% - 200px);
    filter: blur(19vw);
  }
  .footer-contact {
    margin-bottom: 25px;
  }
  .contact-logo ul {
    gap: 5px;
  }
  .title-section h2 {
    font-size: 1.2rem;
  }
  .main-title h1 {
    font-size: 2rem;
    line-height: 1.95rem;
  }
  .copyright {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .copyright .tmdb {
    justify-content: center;
    align-items: center;
  }
  .copyright .tmdb a img {
    width: 110px;
  }
  .copyright p {
    font-size: 0.88rem;
  }
}
</style>
