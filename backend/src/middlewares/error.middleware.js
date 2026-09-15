import multer from "multer";

export const uploadErrorHandler = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message: "File size must be less than 5 MB"
            });
        }

        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    next();
};