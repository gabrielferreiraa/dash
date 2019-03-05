const upload = (req, res) => {
	return res.json({ file: req.file.location });
};

export default { upload };
