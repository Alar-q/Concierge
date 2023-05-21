const orderDto = require("../order-dto");

function userDto(user){
    if(!user){
        return ({
            id: '',
            name: '',
            email: '',
            phone: '',
        });
    }
    return ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
    });
}

module.exports = async function asyncOrderDto(model, user){
    const bookingsService = require("../../services/bookings/bookings-service");
    const {User} = require("../../models/models-manager");
    await bookingsService.populateBookings(model);

    const customer = await User.findById(model.customer);
    const customerDto = userDto(customer);

    const manager = await User.findById(model.manager);
    const managerDto = userDto(manager);

    /*logger.log("------", ({
        ...orderDto(o, user),
        customer: customerDto,
        manager: managerDto,
    }));*/

    return ({
        ...orderDto(model, user),
        customer: customerDto,
        manager: managerDto,
    });
}