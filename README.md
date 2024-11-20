Aplikasi Ionic Vue Firebase 

Nama: Qurrota A'yun
NIM: H1D022051

Implementasi Autentikasi Google dan Profil

1. Konfigurasi Firebase
- Membuat project firebase di https://console.firebase.google.com/ 
- Mengaktifkan Authentication dengan provider Google

2. Implementasi Login Google
- Menggunakan Firebase Authentication untuk Google Sign-In
- Implementasi di store auth:
  ![image](https://github.com/user-attachments/assets/1cdb4849-d53e-4902-8036-230787d75b04)

3. Menampilkan Profil
   ![image](https://github.com/user-attachments/assets/76be0e4c-9d68-42a7-b6fd-1887fb5e8afa)

- Setelah login berhasil, data user disimpan di store
- Profile page mengambil data dari store untuk menampilkan:
  - Foto profil (dari `photoURL`)
  - Nama (dari `displayName`)
  - Email (dari `email`)

4. Alur Autentikasi
   ![image](https://github.com/user-attachments/assets/c8a20fb1-8d57-4fd4-a3b1-cf34a791a96f)

 -  User mengklik tombol "Login with Google"
   ![image](https://github.com/user-attachments/assets/1eaba539-39db-4200-8482-9c2011b77a28)

 -  Firebase memunculkan popup untuk memilih akun Google
 -  Setelah user memilih akun, Firebase mengembalikan data user
 -  Data user disimpan di store dan digunakan di seluruh aplikasi
 -  Profile page mengakses data user untuk menampilkan informasi profil

5. Fitur Logout
- Implementasi logout menggunakan Firebase Auth
- Setelah logout, user diarahkan kembali ke halaman login

6. Cara Menjalankan Aplikasi
 - Ketik ionic serve di directory yang akan dijalankan
   ![image](https://github.com/user-attachments/assets/0fa2794e-d8b0-447a-97f1-24ab9e39edc7)

