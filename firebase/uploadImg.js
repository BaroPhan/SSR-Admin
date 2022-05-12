import app from './firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


//UPLOAD IMG
export const uploadImg = async (file) => {
    return new Promise((resolve, reject) => {
        const storage = getStorage(app);
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, new Date().getTime() + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        reject(error)
                        break;
                    case 'storage/canceled':
                        reject(error)
                        break;

                    // ...

                    case 'storage/unknown':
                        reject(error)
                        break;
                    default:
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
        );
    })
}