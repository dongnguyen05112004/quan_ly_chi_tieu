<template>
    <div>
        <div class="alert alert-primary" role="alert">
            <div class="row">
                <div class="col-lg-3">
                    <div class="card ">
                        <div class="card-body text-center">
                            <img src="https://i.pinimg.com/736x/5c/a9/a1/5ca9a1914cabe6a26602d0d4a9b68ab7.jpg"
                                style="border-radius: 50%; width:100px ; height: 100px;" alt="user avatar">
                            <h5 class="mt-3">Đông</h5>
                            <span class="text-start">
                                <p>Email: </p>
                                <p >Password:************ <i class="fa-solid fa-eye-slash"></i></p>
                                <p>SĐT:</p>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body p-4">
                    <ul class="nav nav-tabs nav-fill mb-4">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#profile">
                                <i class="fa-solid fa-user me-2"></i>Thông tin cá nhân
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#password">
                                <i class="fa-solid fa-lock me-2"></i>Đổi mật khẩu
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="profile">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="card border-0 shadow-sm h-100">
                                        <div class="card-body p-4">
                                            <h3 class="card-title mb-4">Thông tin cá nhân</h3>
                                            <form>
                                                <div class="row g-3">
                                                    <div class="col-md-6">
                                                        <label class="form-label">Họ và tên</label>
                                                        <input  type="text" class="form-control"
                                                            placeholder="Nhập họ và tên">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Email</label>
                                                        <input  type="email" class="form-control" placeholder="example@email.com">
                                                    </div>

                                                    <div class="col-md-6">

                                                        <label class="form-label">Số điện thoại</label>
                                                        <input  type="tel"
                                                            class="form-control" placeholder="0123 456 789">
                                                    </div>
                                                    <div class="col-6">
                                                        <label class="form-label">Ảnh đại diện</label>
                                                        <input  type="text" class="form-control" placeholder="Nhập vào link">
                                                    </div>
                                                </div>
                                                <div class="text-end mt-4">
                                                    <button type="button" class="btn btn-light me-2">Huỷ</button>
                                                    <button type="button" class="btn btn-primary px-4">Lưu thay
                                                        đổi</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="password">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body p-4">
                                            <h5 class="card-title mb-4">Đổi mật khẩu</h5>

                                            <div class="mb-3">
                                                <label class="form-label fw-semibold">Mật khẩu hiện tại</label>
                                                <input type="password" class="form-control" placeholder="Nhập mật khẩu hiện tại">
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-semibold">Mật khẩu mới</label>
                                                <input type="password" class="form-control" placeholder="Nhập mật khẩu mới">
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label fw-semibold">Xác nhận mật khẩu
                                                    mới</label>
                                                <input type="password" class="form-control" placeholder="Nhập lại mật khẩu mới">
                                            </div>
                                            <button  type="submit"
                                                class="btn btn-primary px-4">Cập nhật mật
                                                khẩu</button>
                                        </div>
                                    </div>
                                </div>
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
<style>
.nav-item .nav-link {
    color: #666;
}

.nav-item .nav-link:hover {
    background-color: #b6d4fe;
    transition: background-color 0.3s ease;
}

.nav-item .nav-link.active {
    background-color: #0d6efd;
    color: white;
}
</style>