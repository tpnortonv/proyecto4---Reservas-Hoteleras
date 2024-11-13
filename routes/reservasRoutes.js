const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

// reservasRoutes.js

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Permite a los usuarios crear una reserva en el hotel.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Paraíso"
 *               tipo_habitacion:
 *                 type: string
 *                 example: "Doble"
 *               num_huespedes:
 *                 type: integer
 *                 example: 3
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-15"
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-20"
 *     responses:
 *       201:
 *         description: Reserva creada con éxito
 */
router.post('/', reservasController.crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     description: Devuelve una lista de todas las reservas realizadas en el hotel.
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "12345"
 *                   hotel:
 *                     type: string
 *                     example: "Hotel Paraíso"
 *                   tipo_habitacion:
 *                     type: string
 *                     example: "Doble"
 *                   num_huespedes:
 *                     type: integer
 *                     example: 3
 *                   fecha_inicio:
 *                     type: string
 *                     format: date
 *                     example: "2023-05-15"
 *                   fecha_fin:
 *                     type: string
 *                     format: date
 *                     example: "2023-05-20"
 */
router.get('/', reservasController.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener información de una reserva específica
 *     description: Devuelve los detalles de una reserva por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva obtenidos con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', reservasController.obtenerReservaPorId);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar información de una reserva
 *     description: Permite actualizar los detalles de una reserva existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Paraíso"
 *               tipo_habitacion:
 *                 type: string
 *                 example: "Suite"
 *               num_huespedes:
 *                 type: integer
 *                 example: 4
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-15"
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-20"
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', reservasController.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva específica
 *     description: Permite eliminar una reserva por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva a eliminar
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', reservasController.eliminarReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas por hotel
 *     description: Filtra las reservas en función del nombre del hotel.
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Nombre del hotel
 *     responses:
 *       200:
 *         description: Reservas filtradas por hotel obtenidas con éxito
 */
router.get('/', reservasController.filtrarPorHotel);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas por rango de fechas
 *     description: Filtra las reservas en función de un rango de fechas.
 *     parameters:
 *       - in: query
 *         name: fecha_inicio
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio del rango
 *       - in: query
 *         name: fecha_fin
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin del rango
 *     responses:
 *       200:
 *         description: Reservas filtradas por rango de fechas obtenidas con éxito
 */
router.get('/', reservasController.filtrarPorFecha);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas por tipo de habitación
 *     description: Filtra las reservas según el tipo de habitación reservada.
 *     parameters:
 *       - in: query
 *         name: tipo_habitacion
 *         schema:
 *           type: string
 *         description: Tipo de habitación
 *     responses:
 *       200:
 *         description: Reservas filtradas por tipo de habitación obtenidas con éxito
 */
router.get('/', reservasController.filtrarPorTipoHabitacion);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas por estado
 *     description: Filtra las reservas según el estado de la reserva (por ejemplo, pendiente, pagada).
 *     parameters:
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Estado de la reserva
 *     responses:
 *       200:
 *         description: Reservas filtradas por estado obtenidas con éxito
 */
router.get('/', reservasController.filtrarPorEstado);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas por número de huéspedes
 *     description: Filtra las reservas según el número de huéspedes.
 *     parameters:
 *       - in: query
 *         name: num_huespedes
 *         schema:
 *           type: integer
 *         description: Número de huéspedes
 *     responses:
 *       200:
 *         description: Reservas filtradas por número de huéspedes obtenidas con éxito
 */
router.get('/', reservasController.filtrarPorNumHuespedes);


module.exports = router;
