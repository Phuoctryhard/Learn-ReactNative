# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Tạo dự án rỗng

expo init my-new-app --template blank

## lí do sử dụng map

không làm thay đổi giá trị ban đầu , tạo ra 1 mảng mới

## warning :

tối ưu hóa nó với hiệu suất 100%

## lăn chuột tới đâu render tới đó
- Tối ưu hóa việc render 

## Cọ sát bài toán thực tế ko chỉ học lí thuyết


## Flat list
- mặc định có scroll 
- lấy trường key : làm id 
mặc định lấy chỉ số của mảng
keyExtractor = {item=>item.id + ""}
lấy Key dựa vào id

Tính năng	ScrollView ❌	FlatList ✅
Render dữ liệu	Tất cả cùng lúc	Từng phần khi cần
Hiệu suất	Chậm khi danh sách dài	Mượt mà hơn
Dùng cho danh sách lớn	❌ Không khuyến khích	✅ Nên dùng

Cách FlatList Giải Quyết
Render với danh sách động chứ ý động
✅ Render từng phần nhỏ thay vì toàn bộ danh sách
✅ Tự động tải thêm item khi cần (lazy loading)
✅ Hiệu suất tốt hơn, tránh crash app do dùng quá nhiều RAM