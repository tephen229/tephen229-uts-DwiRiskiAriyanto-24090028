const VALID_EMAIL = "dwiriski2209@gmail.com";
const VALID_NIM = "24090028";

const summary = { totalProducts: 120, totalSales: 85, totalRevenue: 12500000 };

const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
        const googleLoginBtn = document.getElementById('googleLogin');
        const facebookLoginBtn = document.getElementById('facebookLogin');

        emailInput.value = VALID_EMAIL;
        passwordInput.value = VALID_NIM;

        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });

        googleLoginBtn.addEventListener('click', () => window.location.href = "https://www.google.com");
        facebookLoginBtn.addEventListener('click', () => window.location.href = "https://www.facebook.com");

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');

            emailError.textContent = "";
            passwordError.textContent = "";
            let isValid = true;

            if (!email) { emailError.textContent = "Email tidak boleh kosong."; isValid = false; }
            if (!password) { passwordError.textContent = "Password (NIM) tidak boleh kosong."; isValid = false; }

            if (isValid) {
                if (email === VALID_EMAIL && password === VALID_NIM) {
                    alert("Login berhasil! Anda akan diarahkan ke Dashboard.");
                    window.location.href = "dashboard.html";
                } else {
                    alert("Login gagal! Email atau Password (NIM) salah.");
                    emailError.textContent = "Email atau NIM salah.";
                    passwordError.textContent = "Email atau NIM salah.";
                }
            }
        });
    }

    const summaryCardsContainer = document.getElementById('summaryCards');
    if (summaryCardsContainer) {
        const viewProductsBtn = document.getElementById('viewProductsBtn');
        const formatRupiah = (num) => "Rp " + num.toLocaleString('id-ID');

        const summaryItems = [
            { title: "Total Products", value: summary.totalProducts, icon: "fas fa-shopping-bag", format: val => val.toLocaleString('id-ID') },
            { title: "Total Sales", value: summary.totalSales, icon: "fas fa-shopping-bag", format: val => val.toLocaleString('id-ID') },
            { title: "Total Revenue", value: summary.totalRevenue, icon: "fas fa-dollar-sign", format: formatRupiah }
        ];

        summaryCardsContainer.innerHTML = summaryItems.map(item => `
            <div class="card">
                <div class="card-icon"><i class="${item.icon}"></i></div>
                <div class="card-title">${item.title}</div>
                <div class="card-value">${item.format(item.value)}</div>
            </div>
        `).join('');

        viewProductsBtn?.addEventListener('click', () => window.location.href = "products.html");
    }

    const tableBody = document.getElementById('productTableBody');
    if (tableBody) {
        const formatRupiah = (num) => "Rp " + num.toLocaleString('id-ID');

        const renderProductTable = () => {
            tableBody.innerHTML = products.map((product, index) => `
                <tr data-id="${product.id}">
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${formatRupiah(product.price)}</td>
                    <td>${product.stock}</td>
                    <td class="action-cell">
                        <i class="fas fa-pencil-alt edit-btn" data-id="${product.id}"></i>
                        <i class="fas fa-trash-alt delete-btn" data-id="${product.id}"></i>
                    </td>
                </tr>
            `).join('');

            attachEventListeners();
        };

        const attachEventListeners = () => {
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const product = products.find(p => p.id == this.dataset.id);
                    if (product) alert(`Edit produk ${product.name}`);
                });
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const productId = parseInt(this.dataset.id);
                    const product = products.find(p => p.id === productId);
                    
                    if (confirm(`Yakin hapus produk ${product.name}?`)) {
                        products.splice(products.findIndex(p => p.id === productId), 1);
                        document.querySelector(`tr[data-id="${productId}"]`).remove();
                    }
                });
            });
        };

        renderProductTable();
    }
});