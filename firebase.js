     <!-- Tambahkan Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>

  <script>
    // Konfigurasi Firebase menggunakan URL Firebase yang kamu berikan
    const firebaseConfig = {
      apiKey: "AIzaSyD7l6pEWKFECOim-o1gzOqnb9sWtgCKPgU",
      authDomain: "cekpesananzall.firebaseapp.com",
      databaseURL: "https://cekpesananzall-default-rtdb.asia-southeast1.firebasedatabase.app",  // URL Firebase Realtime Database milik kamu
      projectId: "sample-firebase-ai-ap-102b0",
      storageBucket: "cekpesananzall.firebasestorage.app",
      messagingSenderId: "810089072525",
      appId: "1:810089072525:web:a09f8c108a3bc1dde9dfc4"
    };

    // Inisialisasi Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database(app);

    // Membaca data dari Firebase
    function bacaData() {
      const dbRef = database.ref(); // Mendapatkan referensi root dari database

      // Ambil data satu kali
      dbRef.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log('Data Firebase:', data);  // Menampilkan data yang ada di Firebase
      }).catch((error) => {
        console.error('Error membaca data:', error);
      });
    }

    // Menulis data ke Firebase
    function tulisData() {
      const dbRef = database.ref('pesanan/ZALL123');  // Ganti sesuai dengan struktur data kamu

      dbRef.set({
        harga: 10000,
        nama_pengguna: 'Afrizal',
        produk: 'Top Up FF',
        status: 'Menunggu Pembayaran'
      }).then(() => {
        console.log('Data berhasil ditambahkan!');
      }).catch((error) => {
        console.error('Terjadi error:', error);
      });
    }

    // Mengupdate status data pesanan
    function updateStatus() {
      const dbRef = database.ref('pesanan/ZALL123');  // Ganti dengan ID pesanan yang sesuai

      dbRef.update({
        status: 'Sudah Dibayar'
      }).then(() => {
        console.log('Status berhasil diperbarui!');
      }).catch((error) => {
        console.error('Error memperbarui status:', error);
      });
    }

    // Panggil fungsi bacaData() untuk mengambil data
    bacaData();

    // Panggil fungsi tulisData() untuk menambahkan data
    // tulisData();

    // Panggil fungsi updateStatus() untuk mengupdate status
    // updateStatus();
  </script>
</body>
</html>
