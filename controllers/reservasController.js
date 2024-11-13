const reservas = [
    {
        id: '12345',
        hotel: 'Hotel Paraíso',
        tipo_habitacion: 'Doble',
        num_huespedes: 3,
        fecha_inicio: '2023-05-15',
        fecha_fin: '2023-05-20',
        estado: 'Pagada'
    },
    {
        id: '67890',
        hotel: 'Hotel Sol',
        tipo_habitacion: 'Suite',
        num_huespedes: 2,
        fecha_inicio: '2023-06-10',
        fecha_fin: '2023-06-15',
        estado: 'Pendiente'
    }
    // Otras reservas
];

const crearReserva = (req, res) => {
    const { hotel, tipo_habitacion, num_huespedes, fecha_inicio, fecha_fin, estado } = req.body;
    const nuevaReserva = {
        id: (Math.random() * 1000000).toString(),
        hotel,
        tipo_habitacion,
        num_huespedes,
        fecha_inicio,
        fecha_fin,
        estado
    };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
};

const obtenerReservas = (req, res) => {
    res.status(200).json(reservas);
};

const obtenerReservaPorId = (req, res) => {
    const { id } = req.params;
    const reserva = reservas.find(r => r.id === id);
    if (reserva) {
        res.status(200).json(reserva);
    } else {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
};

const actualizarReserva = (req, res) => {
    const { id } = req.params;
    const { hotel, tipo_habitacion, num_huespedes, fecha_inicio, fecha_fin, estado } = req.body;
    const reservaIndex = reservas.findIndex(r => r.id === id);

    if (reservaIndex !== -1) {
        reservas[reservaIndex] = { id, hotel, tipo_habitacion, num_huespedes, fecha_inicio, fecha_fin, estado };
        res.status(200).json(reservas[reservaIndex]);
    } else {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
};

const eliminarReserva = (req, res) => {
    const { id } = req.params;
    const reservaIndex = reservas.findIndex(r => r.id === id);

    if (reservaIndex !== -1) {
        reservas.splice(reservaIndex, 1);
        res.status(200).json({ message: 'Reserva eliminada con éxito' });
    } else {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
};

// Filtro por hotel
const filtrarPorHotel = (req, res) => {
    const { hotel } = req.query;
    const reservasFiltradas = reservas.filter(r => r.hotel.toLowerCase().includes(hotel.toLowerCase()));
    res.status(200).json(reservasFiltradas);
};

// Filtro por fecha
const filtrarPorFecha = (req, res) => {
    const { fecha_inicio, fecha_fin } = req.query;
    let reservasFiltradas = reservas;

    if (fecha_inicio) {
        reservasFiltradas = reservasFiltradas.filter(r => new Date(r.fecha_inicio) >= new Date(fecha_inicio));
    }
    if (fecha_fin) {
        reservasFiltradas = reservasFiltradas.filter(r => new Date(r.fecha_fin) <= new Date(fecha_fin));
    }

    res.status(200).json(reservasFiltradas);
};

// Filtro por tipo de habitación
const filtrarPorTipoHabitacion = (req, res) => {
    const { tipo_habitacion } = req.query;
    const reservasFiltradas = reservas.filter(r => r.tipo_habitacion.toLowerCase() === tipo_habitacion.toLowerCase());
    res.status(200).json(reservasFiltradas);
};

// Filtro por estado
const filtrarPorEstado = (req, res) => {
    const { estado } = req.query;
    const reservasFiltradas = reservas.filter(r => r.estado.toLowerCase() === estado.toLowerCase());
    res.status(200).json(reservasFiltradas);
};

// Filtro por número de huéspedes
const filtrarPorNumHuespedes = (req, res) => {
    const { num_huespedes } = req.query;
    const reservasFiltradas = reservas.filter(r => r.num_huespedes === parseInt(num_huespedes));
    res.status(200).json(reservasFiltradas);
};

// Filtro por ID
const filtrarPorId = (req, res) => {
    const { id } = req.query;
    const reserva = reservas.find(r => r.id === id);
    if (reserva) {
        res.status(200).json(reserva);
    } else {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
};

module.exports = {
    crearReserva,
    obtenerReservas,
    obtenerReservaPorId,
    actualizarReserva,
    eliminarReserva,
    filtrarPorHotel,
    filtrarPorFecha,
    filtrarPorTipoHabitacion,
    filtrarPorEstado,
    filtrarPorNumHuespedes,
    filtrarPorId
};