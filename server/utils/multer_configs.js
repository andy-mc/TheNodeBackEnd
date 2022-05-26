const multer = require("multer");
const ENV = require("../env/config");

const public_files = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/${ENV.FILES_ROUTE}`);
  },
  filename(req, file, cb) {
    const [name, extension] = file.originalname.split(".");
    cb(null, `${name}-${Date.now()}.${extension}`);
  },
});

module.exports = {
  public_files,
};
