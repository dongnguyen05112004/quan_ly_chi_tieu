<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH DANH MỤC</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Thêm danh mục
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th class="text-center">#</th>
                                <th class="text-center">Mã danh mục</th>
                                <th class="text-center">Tên danh mục</th>
                                <th class="text-center">Mô tả</th>
                                <th class="text-center">Mã loại</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="text-center">DM01</td>
                                <td class="text-center">Tiền Mua Iphone 16ProMax 1T</td>
                                <td class="text-center">sssss</td>
                                <td class="text-center">ML01</td>
                                <td class="text-center">
                                    <button class="btn btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Sửa danh mục -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chỉnh sửa Danh Mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Mã danh mục:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên danh mục:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mô tả:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mã loại:</label>
                            <input type="text" class="form-control" id="message-text">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Thêm danh mục -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addModalLabel">Thêm danh mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Mã danh mục:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên danh mục:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mô tả:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Mã loại:</label>
                            <input type="text" class="form-control" id="message-text">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Xóa danh mục -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="deleteModalLabel">Xóa danh mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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