# Node.js Contact Form with Nodemailer

Bu proje, Node.js ve Nodemailer kullanarak bir iletişim formunu e-posta olarak göndermek için örnek bir uygulamadır.

## Başlarken

Bu talimatlar, projeyi yerel bilgisayarınızda çalıştırmak ve geliştirmek için size yardımcı olacaktır.

### Önkoşullar

Projenin çalışması için aşağıdaki yazılımların bilgisayarınızda yüklü olduğundan emin olun:

- Node.js
- npm (Node Package Manager)

### Kurulum

1. Bu projeyi klonlayın veya ZIP dosyası olarak indirin.

2. Proje klasörüne gidin ve aşağıdaki komutu çalıştırın:

npm install

Bu komut, projenin bağımlılıklarını `package.json` dosyasına dayanarak yükleyecektir.

3. `app.js` dosyasında Gmail adresinizi ve şifrenizi, iletilerinizin gönderileceği e-posta adresini değiştirin.

4. Terminalde aşağıdaki komutu çalıştırarak uygulamayı başlatın:

node app.js


Bu komut, uygulamayı 3000 numaralı port üzerinde başlatacaktır.

5. Web tarayıcınızda `http://localhost:3000` adresine giderek iletişim formunu görüntüleyebilirsiniz.

## Kullanım

- İletişim formunda, adınızı, e-posta adresinizi ve göndermek istediğiniz mesajı girin.
- "Send Message" düğmesine tıklayarak iletişim formunu gönderin.
- Eğer e-posta başarıyla gönderilirse "Success" mesajını göreceksiniz. Aksi takdirde, "Error" mesajı ile birlikte hata detayları terminalde görüntülenecektir.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasını inceleyebilirsiniz.
