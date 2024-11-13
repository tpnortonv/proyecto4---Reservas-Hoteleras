const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

// Crear reserva
router.post('/', reservasController.crearReserva);

// Obtener todas las reservas
router.get('/', reservasController.obtenerReservas);

// Obtener una reserva específica
router.get('/:id', reservasController.obtenerReservaPorId);

// Actualizar una reserva
router.put('/:id', reservasController.actualizarReserva);

// Eliminar una reserva
router.delete('/:id', reservasController.eliminarReserva);

// Filtrar reservas por hotel
router.get('/filtrar/hotel', reservasController.filtrarPorHotel);

// Filtrar reservas por rango de fechas
router.get('/filtrar/fechas', reservasController.filtrarPorFecha);

// Filtrar reservas por tipo de habitación
router.get('/filtrar/tipo-habitacion', reservasController.filtrarPorTipoHabitacion);

// Filtrar reservas por estado
router.get('/filtrar/estado', reservasController.filtrarPorEstado);

// Filtrar reservas por número de huéspedes
router.get('/filtrar/num-huespedes', reservasController.filtrarPorNumHuespedes);

// Filtrar reservas por ID (en caso de querer buscar por múltiples filtros)
router.get('/filtrar/id', reservasController.filtrarPorId);

module.exports = router;

