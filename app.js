/* ============================================
   HỆ THỐNG QUẢN LÝ TÀI SẢN THIẾT BỊ
   Core Data Layer & Utilities
   ============================================ */

// ---- Sample Data ----
const SAMPLE_DATA = {
  loaiThietBi: [
    { maLoai: 'LAP', tenLoai: 'Máy tính xách tay' },
    { maLoai: 'MON', tenLoai: 'Màn hình' },
    { maLoai: 'PRT', tenLoai: 'Máy in' },
    { maLoai: 'PRO', tenLoai: 'Máy chiếu' },
    { maLoai: 'PC', tenLoai: 'Máy tính để bàn' },
    { maLoai: 'KEY', tenLoai: 'Bàn phím' },
    { maLoai: 'MOU', tenLoai: 'Chuột máy tính' },
  ],
  nhanVien: [
    { maNV: 'AD01', hoTen: 'Phạm Thạch Thảo', phongBan: 'Phòng Hành chính', soDT: '0901234567', matKhau: '123456', vaiTro: 'Quản lý' },
    { maNV: 'NV01', hoTen: 'Trần Văn An', phongBan: 'Phòng Kỹ thuật', soDT: '0912345678', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV02', hoTen: 'Lê Thị Bình', phongBan: 'Phòng Kế toán', soDT: '0923456789', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV03', hoTen: 'Phạm Hồng Phúc', phongBan: 'Phòng Kinh doanh', soDT: '0934567890', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV04', hoTen: 'Đặng Minh Tâm', phongBan: 'Phòng Kỹ thuật', soDT: '0945678901', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV05', hoTen: 'Phạm Hoàng Gia', phongBan: 'Phòng Kỹ thuật', soDT: '0956789012', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV06', hoTen: 'Nguyễn Thân Dương', phongBan: 'Phòng Kỹ thuật', soDT: '0967890123', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV07', hoTen: 'Trương Hồng Yến', phongBan: 'Phòng Kế toán', soDT: '0978901234', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV08', hoTen: 'Nguyễn Ngọc Giàu', phongBan: 'Phòng Kế toán', soDT: '0989012345', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV09', hoTen: 'Thạch Tú Phương', phongBan: 'Phòng Hành chính', soDT: '0990123456', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV10', hoTen: 'Bùi Gia Bảo', phongBan: 'Phòng Hành chính', soDT: '0909876543', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV11', hoTen: 'Đào Tuệ Lam', phongBan: 'Phòng Kinh doanh', soDT: '0918765432', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV12', hoTen: 'Trương Chí Khang', phongBan: 'Phòng Kinh doanh', soDT: '0927654321', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV13', hoTen: 'Nguyễn Hải Đăng', phongBan: 'Phòng Kỹ thuật', soDT: '0936543210', matKhau: '123456', vaiTro: 'Nhân viên' },
    { maNV: 'NV14', hoTen: 'Huỳnh Thư', phongBan: 'Phòng Kính doanh', soDT: '0945432109', matKhau: '123456', vaiTro: 'Nhân viên' },
  ],
  thietBi: [
    { maTB: 'TB001', tenTB: 'Laptop Dell Latitude 5420', maLoai: 'LAP', ngayNhap: '2025-01-10', donGia: 22000000, trangThai: 'Sẵn sàng', soLuong: 5 },
    { maTB: 'TB002', tenTB: 'Laptop MacBook Pro M2', maLoai: 'LAP', ngayNhap: '2025-01-12', donGia: 45000000, trangThai: 'Đang dùng', soLuong: 2 },
    { maTB: 'TB003', tenTB: 'Màn hình Dell UltraSharp 24 inch', maLoai: 'MON', ngayNhap: '2025-01-15', donGia: 6500000, trangThai: 'Sẵn sàng', soLuong: 10 },
    { maTB: 'TB004', tenTB: 'Màn hình LG Ergo 27 inch', maLoai: 'MON', ngayNhap: '2025-01-20', donGia: 12000000, trangThai: 'Hỏng', soLuong: 1 },
    { maTB: 'TB005', tenTB: 'Máy in HP LaserJet Pro', maLoai: 'PRT', ngayNhap: '2025-02-01', donGia: 5500000, trangThai: 'Sẵn sàng', soLuong: 3 },
    { maTB: 'TB006', tenTB: 'Máy chiếu Sony VPL-DX221', maLoai: 'PRO', ngayNhap: '2025-02-10', donGia: 15000000, trangThai: 'Đang dùng', soLuong: 1 },
    { maTB: 'TB007', tenTB: 'Laptop HP EliteBook 840', maLoai: 'LAP', ngayNhap: '2025-02-15', donGia: 28000000, trangThai: 'Sẵn sàng', soLuong: 4 },
    { maTB: 'TB008', tenTB: 'PC Dell OptiPlex 7090', maLoai: 'PC', ngayNhap: '2025-03-01', donGia: 18000000, trangThai: 'Sẵn sàng', soLuong: 5 },
    { maTB: 'TB009', tenTB: 'PC HP EliteDesk 800 G6', maLoai: 'PC', ngayNhap: '2025-03-02', donGia: 16500000, trangThai: 'Sẵn sàng', soLuong: 3 },
    { maTB: 'TB010', tenTB: 'PC Lenovo ThinkCentre M70s', maLoai: 'PC', ngayNhap: '2025-03-03', donGia: 15000000, trangThai: 'Đang dùng', soLuong: 2 },
    { maTB: 'TB011', tenTB: 'Bàn phím cơ Keychron K8', maLoai: 'KEY', ngayNhap: '2025-03-04', donGia: 2500000, trangThai: 'Sẵn sàng', soLuong: 10 },
    { maTB: 'TB012', tenTB: 'Bàn phím Logitech MX Keys', maLoai: 'KEY', ngayNhap: '2025-03-05', donGia: 2800000, trangThai: 'Sẵn sàng', soLuong: 5 },
    { maTB: 'TB013', tenTB: 'Bàn phím DareU EK87', maLoai: 'KEY', ngayNhap: '2025-03-06', donGia: 600000, trangThai: 'Sẵn sàng', soLuong: 15 },
    { maTB: 'TB014', tenTB: 'Chuột không dây Logitech MX Master 3', maLoai: 'MOU', ngayNhap: '2025-03-07', donGia: 2400000, trangThai: 'Sẵn sàng', soLuong: 8 },
    { maTB: 'TB015', tenTB: 'Chuột Razer DeathAdder V2', maLoai: 'MOU', ngayNhap: '2025-03-08', donGia: 1500000, trangThai: 'Sẵn sàng', soLuong: 5 },
    { maTB: 'TB016', tenTB: 'Chuột Fuhlen L102', maLoai: 'MOU', ngayNhap: '2025-03-09', donGia: 150000, trangThai: 'Sẵn sàng', soLuong: 20 },
    { maTB: 'TB017', tenTB: 'Laptop Lenovo ThinkPad T14', maLoai: 'LAP', ngayNhap: '2025-03-10', donGia: 30000000, trangThai: 'Sẵn sàng', soLuong: 4 },
  ],
  phieuMuonTra: [
    { maPhieu: 1, maNV: 'NV01', maTB: 'TB001', ngayMuon: '2025-01-10T08:00:00', ngayTraDuKien: '2025-01-15', ngayTraThucTe: '2025-01-15T16:30:00', tinhTrangKhiTra: 'Máy bình thường, đủ sạc', trangThaiPhieu: 'Đã trả' },
    { maPhieu: 2, maNV: 'NV02', maTB: 'TB002', ngayMuon: '2025-02-12T09:15:00', ngayTraDuKien: '2025-02-28', ngayTraThucTe: null, tinhTrangKhiTra: null, trangThaiPhieu: 'Đang mượn' },
    { maPhieu: 3, maNV: 'NV03', maTB: 'TB003', ngayMuon: '2025-01-20T10:00:00', ngayTraDuKien: '2025-01-22', ngayTraThucTe: '2025-01-23T08:30:00', tinhTrangKhiTra: 'Màn hình có vệt sọc nhẹ', trangThaiPhieu: 'Đã trả' },
    { maPhieu: 4, maNV: 'NV04', maTB: 'TB006', ngayMuon: '2025-01-01T14:00:00', ngayTraDuKien: '2025-01-10', ngayTraThucTe: null, tinhTrangKhiTra: null, trangThaiPhieu: 'Chờ duyệt trả' },
  ],
  nextPhieuId: 5
};

// ---- Data Access Layer ----
const DB = {
  init() {
    if (!localStorage.getItem('db_initialized_v5')) {
      localStorage.setItem('loaiThietBi', JSON.stringify(SAMPLE_DATA.loaiThietBi));
      localStorage.setItem('nhanVien', JSON.stringify(SAMPLE_DATA.nhanVien));
      localStorage.setItem('thietBi', JSON.stringify(SAMPLE_DATA.thietBi));
      localStorage.setItem('phieuMuonTra', JSON.stringify(SAMPLE_DATA.phieuMuonTra));
      localStorage.setItem('nextPhieuId', SAMPLE_DATA.nextPhieuId);
      localStorage.setItem('db_initialized_v5', 'true');
    }
  },

  reset() {
    localStorage.clear();
    this.init();
  },

  // Generic CRUD
  getAll(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  // ---- Loại Thiết Bị ----
  getLoaiTB() { return this.getAll('loaiThietBi'); },

  addLoaiTB(item) {
    const list = this.getLoaiTB();
    if (list.find(x => x.maLoai === item.maLoai)) return false;
    list.push(item);
    this.save('loaiThietBi', list);
    return true;
  },

  updateLoaiTB(maLoai, data) {
    const list = this.getLoaiTB();
    const idx = list.findIndex(x => x.maLoai === maLoai);
    if (idx === -1) return false;
    list[idx] = { ...list[idx], ...data };
    this.save('loaiThietBi', list);
    return true;
  },

  deleteLoaiTB(maLoai) {
    let list = this.getLoaiTB();
    // Check if any equipment uses this type
    const equipment = this.getThietBi().find(x => x.maLoai === maLoai);
    if (equipment) return { success: false, message: 'Không thể xóa vì đang có thiết bị thuộc loại này!' };
    list = list.filter(x => x.maLoai !== maLoai);
    this.save('loaiThietBi', list);
    return { success: true };
  },

  // ---- Nhân Viên ----
  getNhanVien() { return this.getAll('nhanVien'); },

  getNhanVienById(maNV) {
    return this.getNhanVien().find(x => x.maNV === maNV);
  },

  addNhanVien(item) {
    const list = this.getNhanVien();
    if (list.find(x => x.maNV === item.maNV)) return false;
    list.push(item);
    this.save('nhanVien', list);
    return true;
  },

  updateNhanVien(maNV, data) {
    const list = this.getNhanVien();
    const idx = list.findIndex(x => x.maNV === maNV);
    if (idx === -1) return false;
    list[idx] = { ...list[idx], ...data };
    this.save('nhanVien', list);
    return true;
  },

  deleteNhanVien(maNV) {
    let list = this.getNhanVien();
    const hasPhieu = this.getPhieuMuonTra().find(x => x.maNV === maNV);
    if (hasPhieu) return { success: false, message: 'Không thể xóa vì nhân viên đang có phiếu mượn!' };
    list = list.filter(x => x.maNV !== maNV);
    this.save('nhanVien', list);
    return { success: true };
  },

  // ---- Thiết Bị ----
  getThietBi() { return this.getAll('thietBi'); },

  getThietBiById(maTB) {
    return this.getThietBi().find(x => x.maTB === maTB);
  },

  addThietBi(item) {
    const list = this.getThietBi();
    if (list.find(x => x.maTB === item.maTB)) return false;
    list.push(item);
    this.save('thietBi', list);
    return true;
  },

  updateThietBi(maTB, data) {
    const list = this.getThietBi();
    const idx = list.findIndex(x => x.maTB === maTB);
    if (idx === -1) return false;
    list[idx] = { ...list[idx], ...data };
    this.save('thietBi', list);
    return true;
  },

  deleteThietBi(maTB) {
    let list = this.getThietBi();
    const hasPhieu = this.getPhieuMuonTra().find(x => x.maTB === maTB && !x.ngayTraThucTe);
    if (hasPhieu) return { success: false, message: 'Không thể xóa vì thiết bị đang được mượn!' };
    list = list.filter(x => x.maTB !== maTB);
    this.save('thietBi', list);
    return { success: true };
  },

  // ---- Phiếu Mượn Trả ----
  getPhieuMuonTra() { return this.getAll('phieuMuonTra'); },

  getPhieuDangMuon() {
    return this.getPhieuMuonTra().filter(x => x.trangThaiPhieu === 'Đang mượn');
  },

  getPhieuDaTra() {
    return this.getPhieuMuonTra().filter(x => x.trangThaiPhieu === 'Đã trả');
  },

  getPhieuChoDuyet() {
    return this.getPhieuMuonTra().filter(x => x.trangThaiPhieu === 'Chờ duyệt mượn' || x.trangThaiPhieu === 'Chờ duyệt trả');
  },

  addPhieu(data) {
    const list = this.getPhieuMuonTra();
    let nextId = parseInt(localStorage.getItem('nextPhieuId') || '1');
    data.maPhieu = nextId;
    data.trangThaiPhieu = data.trangThaiPhieu || 'Chờ duyệt mượn';
    list.push(data);
    this.save('phieuMuonTra', list);
    localStorage.setItem('nextPhieuId', nextId + 1);

    // Update equipment status if admin creates directly
    if (data.trangThaiPhieu === 'Đang mượn') {
       this.updateThietBi(data.maTB, { trangThai: 'Đang dùng' });
    }
    return true;
  },

  duyetMuon(maPhieu, isApproved) {
    const list = this.getPhieuMuonTra();
    const idx = list.findIndex(x => x.maPhieu === maPhieu);
    if (idx === -1) return false;

    if (isApproved) {
      list[idx].trangThaiPhieu = 'Đang mượn';
      this.updateThietBi(list[idx].maTB, { trangThai: 'Đang dùng' });
    } else {
      list[idx].trangThaiPhieu = 'Từ chối';
    }
    this.save('phieuMuonTra', list);
    return true;
  },

  yeuCauTra(maPhieu, tinhTrang) {
    const list = this.getPhieuMuonTra();
    const idx = list.findIndex(x => x.maPhieu === maPhieu);
    if (idx === -1) return false;

    list[idx].trangThaiPhieu = 'Chờ duyệt trả';
    list[idx].tinhTrangKhiTra = tinhTrang || 'Bình thường';
    this.save('phieuMuonTra', list);
    return true;
  },

  duyetTra(maPhieu, isApproved) {
    const list = this.getPhieuMuonTra();
    const idx = list.findIndex(x => x.maPhieu === maPhieu);
    if (idx === -1) return false;

    if (isApproved) {
      list[idx].trangThaiPhieu = 'Đã trả';
      list[idx].ngayTraThucTe = new Date().toISOString();
      const tinhTrang = list[idx].tinhTrangKhiTra || '';
      const trangThaiMoi = tinhTrang.toLowerCase().includes('hỏng') ? 'Hỏng' : 'Sẵn sàng';
      this.updateThietBi(list[idx].maTB, { trangThai: trangThaiMoi });
    } else {
      list[idx].trangThaiPhieu = 'Đang mượn';
      list[idx].tinhTrangKhiTra = null;
    }
    this.save('phieuMuonTra', list);
    return true;
  },

  traThietBi(maPhieu, tinhTrang) {
    // Legacy direct return for admin
    return this.yeuCauTra(maPhieu, tinhTrang) && this.duyetTra(maPhieu, true);
  },

  deletePhieu(maPhieu) {
    let list = this.getPhieuMuonTra();
    const phieu = list.find(x => x.maPhieu === maPhieu);
    if (phieu && !phieu.ngayTraThucTe) {
      this.updateThietBi(phieu.maTB, { trangThai: 'Sẵn sàng' });
    }
    list = list.filter(x => x.maPhieu !== maPhieu);
    this.save('phieuMuonTra', list);
    return true;
  },

  // ---- Lịch sử mượn theo nhân viên ----
  getPhieuByNV(maNV) {
    return this.getPhieuMuonTra().filter(x => x.maNV === maNV);
  },

  getDangMuonByNV(maNV) {
    return this.getPhieuDangMuon().filter(x => x.maNV === maNV);
  },

  // ---- Thống kê ----
  getStats() {
    const thietBi = this.getThietBi();
    const nhanVien = this.getNhanVien();
    const phieu = this.getPhieuMuonTra();
    const dangMuon = phieu.filter(x => x.trangThaiPhieu === 'Đang mượn');
    const quaHan = dangMuon.filter(x => new Date(x.ngayTraDuKien) < new Date());
    const choDuyet = phieu.filter(x => x.trangThaiPhieu === 'Chờ duyệt mượn' || x.trangThaiPhieu === 'Chờ duyệt trả');

    return {
      tongThietBi: thietBi.length,
      sanSang: thietBi.filter(x => x.trangThai === 'Sẵn sàng').length,
      dangDung: thietBi.filter(x => x.trangThai === 'Đang dùng').length,
      hong: thietBi.filter(x => x.trangThai === 'Hỏng').length,
      tongNhanVien: nhanVien.length,
      dangMuon: dangMuon.length,
      daTra: phieu.filter(x => x.ngayTraThucTe).length,
      quaHan: quaHan.length,
      tongGiaTri: thietBi.reduce((s, x) => s + (x.donGia || 0), 0),
      thietBiTheoLoai: this.getLoaiTB().map(loai => ({
        tenLoai: loai.tenLoai,
        maLoai: loai.maLoai,
        soLuong: thietBi.filter(x => x.maLoai === loai.maLoai).length
      }))
    };
  }
};

// ---- Authentication ----
const Auth = {
  login(maNV, matKhau) {
    const nv = DB.getNhanVien().find(x => x.maNV === maNV && x.matKhau === matKhau);
    if (nv) {
      sessionStorage.setItem('currentUser', JSON.stringify(nv));
      return nv;
    }
    return null;
  },

  logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  },

  getCurrentUser() {
    const data = sessionStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
  },

  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.vaiTro === 'Quản lý';
  },

  requireAuth(role) {
    const user = this.getCurrentUser();
    if (!user) {
      window.location.href = 'index.html';
      return null;
    }
    if (role === 'admin' && !this.isAdmin()) {
      window.location.href = 'index.html';
      return null;
    }
    return user;
  }
};

// ---- UI Utilities ----
const UI = {
  // Toast notifications
  showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '✅'}</span>
      <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Modal
  openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
  },

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  },

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  },

  // Confirm dialog
  confirm(message) {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay active';
      overlay.innerHTML = `
        <div class="modal" style="max-width:400px">
          <div class="modal-body">
            <div class="confirm-dialog">
              <div class="icon">🤔</div>
              <h3>Xác nhận</h3>
              <p>${message}</p>
              <div class="btn-group" style="justify-content:center">
                <button class="btn btn-outline" id="confirmNo">Hủy</button>
                <button class="btn btn-danger" id="confirmYes">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector('#confirmYes').onclick = () => { overlay.remove(); resolve(true); };
      overlay.querySelector('#confirmNo').onclick = () => { overlay.remove(); resolve(false); };
    });
  },

  // Format currency
  formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  },

  // Format date
  formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN');
  },

  formatDateTime(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  },

  // Status badge
  statusBadge(status) {
    const map = {
      'Sẵn sàng': 'badge-success',
      'Đang dùng': 'badge-warning',
      'Hỏng': 'badge-danger',
    };
    return `<span class="badge ${map[status] || 'badge-info'}">${status}</span>`;
  },

  // Update datetime display
  startClock(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const update = () => {
      el.textContent = new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN');
    };
    update();
    setInterval(update, 1000);
  },

  // Tabs
  initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.card') || document;
        group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  },

  // Set sidebar active
  setActiveSidebar(page) {
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === page);
    });
  },

  // Load sidebar user info
  loadUserInfo() {
    const user = Auth.getCurrentUser();
    if (!user) return;
    const nameEl = document.getElementById('userName');
    const roleEl = document.getElementById('userRole');
    if (nameEl) nameEl.textContent = user.hoTen;
    if (roleEl) roleEl.textContent = user.vaiTro;
  }
};

// ---- Initialize DB on load ----
DB.init();
