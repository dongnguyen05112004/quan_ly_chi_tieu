.<template>

    <div id="main_admin">
        <div class="nav">
            <div class="content">
                <div class="admin_avatar avatar">
                    <img src="./assets/img/testAvatar.png" alt="">
                </div>
                <p class="admin_username">Vanc123</p>
                <a class="btn_DangXuat" href="#">Đăng xuất</a>
            </div>
        </div>
        <div class="content_admin">
            <!-- Tiêu đề -->
            <h1>Quản lý tài khoản</h1>
            <!-- 1 ô tìm kiếm và 1 btn thêm tài khoản -->
            <div class="buttons">
                <input class="input_search" type="search" placeholder="Tìm kiếm">
                <button class="btn_themTaiKhoan">THÊM TÀI KHOẢN</button>
            </div>
            <div class="clear"></div>
            <!-- Field name của table -->
            <div class="table_heading row">
                 <div class="col width_auto"> <input type="checkbox" class="option1" name="option1" value="Option1"> </div>
                 <div class="col width_auto">
                    <div class="avatar">
                        <img src="" alt="">
                    </div></div>
                 <div class="col col-8">TÊN KHÁCH HÀNG</div>
                 <div class="col col-8">TÊN ĐĂNG NHẬP</div>
                 <div class="col col-8">MẬT KHẨU</div>
                 <div class="col col-8">EMAIL</div>
                 <div class="col col-8">SỐ ĐIỆN THOẠI</div>
                 <div class="col col-8">TRẠNG THÁI</div>
                 <div class="col col-8">TÙY CHỌN</div>
            </div>
            <!-- Render dữ liệu thành từng item để hiển thị -->
            <div class="table_listItem row">
                <div class="row row1" data-id="1">
                    <div class="col width_auto"> <input type="checkbox" class="option1" name="option1" value="Option1"> </div>   
                    <div class="col width_auto">
                        <div class="avatar">
                            <img src="./assets/img/testAvatar.png" alt="">
                        </div>
                    </div>
                    <div class="item_name col col-8">Nguyễn Văn A1</div>   
                    <div class="item_username col col-8">VanA123</div>   
                    <div class="item_password col col-8">123</div>   
                    <div class="item_email col col-8">nguyenvana@gmail.com</div>   
                    <div class="item_phone col col-8">1234567890</div>   
                    <div class="col col-8">Mở</div>   
                    <div class="col col-8">
                        <div class="btn_option" >
                            <i class="fa-solid fa-ellipsis"></i>  
                            <!-- khoi option list -->
                            <div class="option_block">
                                
                            </div>
                            <!-- <div class="option_list" >
                                <div class="row">
                                    <div class="col col-full">
                                        <button class="btn btn_XoaTaiKhoan">
                                            Xóa tài khoản
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-full">
                                        <button class="btn btn_SuaThongTin">
                                            Sửa thông tin
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-full">
                                        <button class="btn btn_KhoaTaiKhoan">
                                            Khóa tài khoản 
                                        </button>
                                    </div>      
                                </div>
                                <div class="row">
                                    <div class="col col-full">
                                        <button class="btn btn_KichHoatTaiKhoan">
                                            Kích hoạt tài khoản
                                        </button>
                                    </div>
                                </div>
                            </div> -->
                        </div> 
                        
                    </div>   
                </div>
                
            </div>
        </div>
    </div>

    <!-- Modal them tai khoan -->
    <div class="modal modal_ThemTaikhoan">
        <div class="modal_container">
            <div class="modal_close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="modal_header">
                <h2>Thêm tài khoản</h2>
            </div>
            <div class="modal_body">
                <div class="row">
                    <div class="col col-half">
                        <div class="row">
                            <p>Tên khách hàng</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                    <div class="col col-half">
                        <div class="row">
                            <p>Email</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-half">
                        <div class="row">
                            <p>Tên đăng nhập</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                    <div class="col col-half">
                        <div class="row">
                            <p>Số điện thoại</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-full">
                        <div class="row">
                            <p>Mật khẩu</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-full">
                        <button class="btn_ThemMoi">Thêm mới</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal them sửa thông tin -->
    <div class="modal modal_SuaThongTin">
        <div class="modal_container">
            <div class="modal_close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="modal_header">
                <h2>Thêm tài khoản</h2>
            </div>
            <div class="modal_body">
                <div class="row">
                    <div class="col col-half">
                        <div class="row">
                            <p>Tên khách hàng</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                    <div class="col col-half">
                        <div class="row">
                            <p>Email</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-half">
                        <div class="row">
                            <p>Tên đăng nhập</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                    <div class="col col-half">
                        <div class="row">
                            <p>Số điện thoại</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-full">
                        <div class="row">
                            <p>Mật khẩu</p>
                        </div>
                        <div class="row">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-full">
                        <button class="btn_ThemMoi">Thêm mới</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Khung html cua option list -->
    <!-- <div class="option_list">
        <div class="row">
            <div class="col col-full">
                <button class="btn btn_XoaTaiKhoan">
                    Xóa tài khoản
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col col-full">
                <button class="btn btn_SuaThongTin">
                    Sửa thông tin
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col col-full">
                <button class="btn btn_KhoaTaiKhoan">
                    Khóa tài khoản 
                </button>
            </div>      
        </div>
        <div class="row">
            <div class="col col-full">
                <button class="btn btn_KichHoatTaiKhoan">
                    Kích hoạt tài khoản
                </button>
            </div>
        </div>
    </div> -->


    <!-- <script src="./assets/js/admin.js"></script> -->

    </template>
<script>
// import "../../assets/js/admin.js";
export default {


}
    </script>
<style>
@import "../../assets/css/admin.css";
</style>
