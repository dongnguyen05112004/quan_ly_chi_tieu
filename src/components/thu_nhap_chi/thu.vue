<template>
    <div class="row">
        <div class="col-lg-6">

            <div class="card radius-10 border-top border-5 border-0 border-info">
                <div class="card-header bg-transparent">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">Nguồn thu nhập </h5>
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
                        <p class="mt-2 text-dark" style="font-size: 18px">Lương</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Thưởng</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Thu hồi nợ</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Trợ cấp</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Lợi nhuận</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
                            <button class="btn btn-danger ms-2" data-bs-toggle="modal"
                                data-bs-target="#xoa">Xóa</button>
                        </a>
                    </nav>
                    <hr>
                    <nav class="nav nav-pills">
                        <h5></h5>
                        <p class="mt-2 text-dark" style="font-size: 18px">Kinh doanh</p>
                        <a class="flex-sm-fill text-end" aria-current="page" href="#">
                            <button class="btn btn-warning ms-2">Cập nhật</button>
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

                            thong kê nguồn thu nhập
                            <div class="chart-container1">
                                <div class="chartjs-size-monitor"
                                    style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                    <div class="chartjs-size-monitor-expand"
                                        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                        <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                        </div>
                                    </div>
                                    <div class="chartjs-size-monitor-shrink"
                                        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                        <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                    </div>
                                </div>
                                <canvas id="chart1" width="1183" height="425"
                                    style="display: block; height: 340px; width: 947px;"
                                    class="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        <div class="col-lg-6">
            <div class="card radius-10 border-top border-5 border-0 border-info">
                <div class="card-header">
                    <h5 class="card-title">Thêm nguồn thu nhập</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Danh mục</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>-- Chọn nguồn thu nhập --</option>
                            <option value="1">Lương</option>
                            <option value="2">Thưởng</option>
                            <option value="3">Lợi nhuận</option>
                            <option value="4">Trợ cấp </option>
                            <option value="5">Kinh doanh</option>
                            <option value="6">Thu hồi nợ</option>
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
        </div>
    </div>

    <div class="modal fade" id="xoa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa nguồn thu nhập</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-dark">
                    <h6>
                        <p>Bạn chắc chắn muốn xóa nguồn thu nhập này</p>
                        <p>Chú ý: Nguồn thu nhập này sẽ không thể khôi phục lại</p>
                    </h6>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
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