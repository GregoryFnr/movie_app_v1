<template>
  <footer>
    <div class="footer-container">
      <div class="footer-contact">
        <h2>Me contacter</h2>
        <div class="contact-logo">
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-legal">
        <a href="">Mentions légales</a>
      </div>
      <div class="copyright">
        <p>Réalisé par Grégory.</p>
      </div>
    </div>
  </footer>
</template>

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

.footer-legal {
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
}

.footer-legal a {
  color: #fff;
  font-size: 1.11rem;
}

.copyright {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}
</style>
