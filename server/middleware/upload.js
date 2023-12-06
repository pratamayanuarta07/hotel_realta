const multer = require("multer");
const storageResto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/resto");
  },
  filename: function (req, file, cb) {
    const configsufix = Math.round(Math.random() * 1e9);
    const ext = file.originalname.split(".").pop();
    cb(null, `${file.fieldname}${configsufix}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    // Terima file dengan tipe MIME 'image/jpeg' atau 'image/png'
    console.log(req.headers["content-length"]);
    if (req.headers["content-length"] < 190000) {
      cb(null, true);
    } else {
      cb("Ukuran terlalu besar", false);
    }
  } else {
    console.log(file.originalname);
    const error = new Error("File type is not supported");
    error.status = 400;

    cb(error);
    // Tolak file dengan tipe MIME lainnya
    //cb('Ekstensi File Bukan Gambar', false);
  }
};

const uploadResto = multer({ storage: storageResto });

module.exports = uploadResto;
