import multer from "multer";

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
         const isPdfMime = file.mimetype === "application/pdf";
        const isPdfExtension = file.originalname.toLowerCase().endsWith(".pdf");
        
        if (isPdfMime || isPdfExtension) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF files are allowed"));
        }
    }
});

export default upload;