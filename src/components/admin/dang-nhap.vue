<template>
    <div id="main_signIn">
        <div class="content">
            <!-- Tiêu đề -->
            <h1>Đăng nhập</h1>
            <!-- Form đăng nhập -->
            <form class="form_signIn" action="">
                <div class="form_content">
                <label class="lbl_username" for="">Tên đăng nhập</label>
                <br>
                <input class="input_username  mt-12 mb-12" placeholder="Username" type="text">
                <br>
                <label class="lbl_password" for="">Mật khẩu</label>
                <br>
                <input class="input_password mt-12 mb-12" placeholder="Password" type="text">
                <br>
                <button class="btn_signIn">Sign In</button>
                </div>
                
            </form>
        </div>
    </div>
</template>
<script >
export default {

}


</script>
<style>
@import "../../assets/css/sign_in.css";
</style>