<template>
  <div class="information-footer">
    <div class="information-bar">
      <ul>
        <li>
          <div class="img-footer">
            <img src="../../assets/logo agetic blanco.png" alt=""> 
          </div>
        </li>
        <iop-separator vertical/>
        <li>
          <a href="#">Interoperabilidad</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Whatsapp</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "iop-footer"
};
</script>

<style scoped>
.information-footer {
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: center;
  padding: 1px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.information-footer .img-footer {
  height: 75%;
  text-align: right;
  width: 120px;
}
.img-footer > img {
  height: 100%;
}
.information-bar > ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  height: 100%;
}
.information-bar > ul > li {
  display: flex;
  align-items: center;
  justify-content: center;
}
.information-bar > ul > li:not(:last-child) {
  margin-right: 20px;
}
.information-bar > ul > li:first-child {
  margin-right: 0;
}
.information-bar a {
  color: var(--iop-secondary);
  font-weight: 500;
  font-size: 0.8em;
}
.information-bar a:hover {
  text-decoration: underline;
}
@media (max-width: 700px) {
}
</style>
