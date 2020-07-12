import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCTmuVIal-HOSbdEnYDDbs0arE_zp0rTiA",
  authDomain: "socialapp-68195.firebaseapp.com",
  databaseURL: "https://socialapp-68195.firebaseio.com",
  projectId: "socialapp-68195",
  storageBucket: "socialapp-68195.appspot.com",
  messagingSenderId: "801005329987",
  appId: "1:801005329987:web:23d532404ffe3908effef6",
};

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  addPost = async ({ text, localUri }) => {
    const remoteUri = await this.uploadPhotoAsync(localUri);

    return new Promise((res, rej) => {
      this.firestore
        .collection("posts")
        .add({
          text,
          uid: this.uid,
          timestamp: this.timestamp,
          image: remoteUri,
        })
        .then((rej) => {
          res(ref);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  uploadPhotoAsync = async (uri) => {
    const path = `photos/${this.uid}/${Date.now()}.jpg`;

    return new Promise(
      async (res, rej) => {
        const response = await fetch(uri);
        const file = await response.blob();

        let upload = firebase.storage().ref(path).put(file);

        upload.on("state_changed"), (snapshot) => {}, (err) => rej(err);
      },
      async () => {
        const url = await upload.snapshot.ref.getDownloadURL();
        res(url);
      }
    );
  };

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;
