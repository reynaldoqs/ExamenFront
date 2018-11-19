<template>
    <div class="login">
        <section>
            <img src="../../assets/logo-code.png"/>
            <vs-button class="dark-button git-btn" size="small" color="dark" icon="add" type="filled">GITHUB LOGIN</vs-button>
            <p> - or - </p>
            <div class="icons-example">
                <vs-input icon="mail" class="dark-input login-input"  placeholder="Email" v-model="value1"/>
                <vs-input icon="lock" class="dark-input login-input"  placeholder="Password" v-model="value1"/>
                <vs-button class="dark-button" size="small" color="dark" type="filled">LOG IN</vs-button>
               
            </div>
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
        </section>
        <footer>
            fotter
        </footer>
    </div>
</template>
<script>
export default {
  data(){
    return {
      value1:''
    }
  }
}
</script>
<style>
.dark-button{
    width: 100%;
    color:#bb432c;
}
.dark-input{
    text-align: left;
    width: 100%;
    
}
.dark-input .vs-input--input.hasIcon{
    background-color: #1E1F21;
}
.dark-input .vs-input--placeholder {
    color: #727272;
    top: -1px;
}


.login-input {
    margin: 20px 0;
}
.git-btn{
    margin-top: 30px;
}
.login{
    --bg-color:#303133;
    --login-color: #262729;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
section{
    background-color: var(--login-color);
    width: 320px;
    margin: 70px 0 0 0;
    text-align: center;
    padding: 60px 25px 25px 25px;
    border-radius: 2px;
    color: silver;
}
img{
    max-width: 180px;
    margin-bottom: 20px;
}

p{
    margin: 80px 0 20px 0;
    font-size: 0.9em;
}
a{
    display: block;
    color: #727272;
    font-size: .85em;
    margin: 30px 0 10px 0;
}
a:last-child{
    margin-top: 10px;
    margin-bottom: 10px;
}
footer{
    width: 100%;

}
</style>
