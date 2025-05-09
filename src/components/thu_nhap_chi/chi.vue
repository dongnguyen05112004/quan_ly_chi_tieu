<template>
    <div class="row">
        <div class="col-lg-6">

            <div class="card radius-10 border-top border-5 border-0 border-info">
                <div class="card-header bg-transparent">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">Khoản chi tiêu</h5>
                        </div>
                        <div class="dropdown ms-auto">
                            <a class="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i
                                    class="bx bx-dots-horizontal-rounded font-22 text-option"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:;">Action</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;">Another action</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;">Something else here</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <nav class="nav nav-pills mt-3">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Chợ</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Di chuyển</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Du lịch</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Gia đình</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Giải trí</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Hóa đơn</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-warning ms-2">Cập
                                nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                </div>
            </div>
            <br>
            <div class="card radius-10 border-top border-5 border-0 border-info">
                <div class="card-body">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/donut-chart-example.svg"
                                height="100px" class="img-fluid" alt="...">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-lg-6">
            <div class="card radius-10 border-top border-5 border-0 border-info">
                <div class="card-header">
                    <h5 class="card-title">Thêm khoản chi tiêu</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Danh mục</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>-- Chọn khoản chi tiêu --</option>
                            <option value="1">Giải trí</option>
                            <option value="2">Mua sắm</option>
                            <option value="3">Ăn uống</option>
                            <option value="4">Từ thiện </option>
                            <option value="5">Sức khỏe</option>
                            <option value="6">Hóa đơn</option>
                            <option value="6">Nhà cửa</option>
                            <option value="6">Đầu tư</option>
                            <option value="6">Học tập</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Số tiền</label>
                        <input type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Ngày nhận</label>
                        <input type="date" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mô tả</label>
                        <input type="text" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-success ">Thêm</button>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/329135/iphone-16-xanh-mong-ket-thumbnew-600x600.png"
                                    height="100px" class="img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title">Iphone 16</h6>
                                    <div class="cursor-pointer my-2">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <div class="clearfix">
                                        <p class="mb-0 float-start fw-bold"><span
                                                class="me-2 text-decoration-line-through text-secondary">$999</span><span>$998</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://shopdunk.com/images/thumbs/0027483_airpods-2-chinh-hang-cu-dep.jpeg"
                                    height="100px" class="img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title">Airpod 4</h6>
                                    <div class="cursor-pointer my-2">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <div class="clearfix">
                                        <p class="mb-0 float-start fw-bold"><span
                                                class="me-2 text-decoration-line-through text-secondary">$1000</span><span>$99</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn2.fptshop.com.vn/unsafe/asus_vivobook_16x_oled_k3605_black_db8160da4f.png"
                                    height="100px" class="img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title">Laptop Asus</h6>
                                    <div class="cursor-pointer my-2">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <div class="clearfix">
                                        <p class="mb-0 float-start fw-bold"><span
                                                class="me-2 text-decoration-line-through text-secondary">$999</span><span>$998</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://didonghan.vn/pic/product/1fd3d02d-5d31-45ac-8100-132dc8ce5e98.jpg"
                                    height="100px" class="img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title">Samsung Z Flip 4 </h6>
                                    <div class="cursor-pointer my-2">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <div class="clearfix">
                                        <p class="mb-0 float-start fw-bold"><span
                                                class="me-2 text-decoration-line-through text-secondary">$1010</span><span>$1000</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>



    <div class="modal fade" id="xoa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa khoản chi tiêu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-dark">
                    <h6>
                        <p>Bạn chắc chắn muốn xóa khoản chi tiêu này</p>
                        <p>Chú ý: khoản chi tiêu này sẽ không thể khôi phục lại</p>
                    </h6>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="capnhat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Cập nhật khoản chi tiêu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-dark">

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Số tiền</label>
                        <input type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Ngày nhận</label>
                        <input type="date" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mô tả</label>
                        <input type="text" class="form-control" id="exampleInputPassword1">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-warning">Cập nhật</button>
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