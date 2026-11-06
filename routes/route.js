const router = require("express").Router();
const { register, login } = require("../controllers/authController");


router.post("/auth/register", register);
router.post("/auth/login", login);


router.get(`/bookings`);
router.get(`/bookings/${id}`);
router.put(`/bookings/${id}`);
router.delete(`/bookings/${id}`);

router.get(`/reports/class/${travelClass}`);
router.get(`/reports/fare-over/${fare}`);
router.get(`/reports/daily-summary`);
router.get(`/bookings/history/${bookingId}?page=${pageno}&limit=${limitofcontent}`);


module.exports = router;