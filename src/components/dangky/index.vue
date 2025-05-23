<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-1">
            <div class="col mx-auto">
                <div class="my-4 text-center">
                    
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG KÝ </h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr />
                            </div>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <label class="form-label">Họ Và Tên</label>
                                        <input  type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-12">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input  type="text" class="form-control" />
                                    </div>
                                    
                                    <div class="col-12">
                                        <label class="form-label">Mật Khẩu</label>
                                        <input  type="password" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Nhập Lại Mật Khẩu</label>
                                        <input  type="password" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <button type="button" class="btn btn-dark mt-3">Đăng ký</button>
                                    </div>
                                    
                                    
                                    <div class="col-12">
                                        <router-link to="/shipper/dang-nhap">
                                            <button type="button" class="btn btn-secondary w-100">
                                                <i class="fa-solid fa-arrow-left"></i>Quay Lại Đăng Nhập
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {

}
</script>
<style></style>