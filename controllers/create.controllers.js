const {createCustomers ,getAllCustomers} = require(`../models/query`)
const {createBookings} = require (`../models/query`)

const creating = (req, res) => {

    const {firstname,othernames,email,phone} = req.body
    
    if (!firstname || !othernames || !email || !phone) {
        
        res.status(400).json({
            status:false,
            message: "All fields required"
        })
    }

    try {
        createCustomersByEmail(email)
        .then(responseFromEmail => {
            if (responseFromEmail.length > 0) {
               throw new Error("Customer already exist")
            }

            return createCustomers(firstname,othernames,email,phone)
           
         })
        .then(createResult => {
                
            res.status(201).json({
                status:true,
                message: "Customer created"
            })

        })
        .catch(error => {
            console.log(error.message)
            res.status(400).json({
                status:false,
                message: error.message
            })
        })

    
    
} catch (error) {
    
        res.status(400).json({
            status : fasle,
            message: error.message
        })
}
   

}

const booking = (req, res) => {

    const {booking_time,stay_duration,checkin_date,checkout_date,numberof_rooms} = req.body
    
    if (!booking_time || !stay_duration || !checkin_date || !checkout_date || numberof_rooms ) {
        
        res.status(400).json({
            status:false,
            message: "All fields required"
        })
    }

    try {
        bookCustomersByCheckinDate(checkindate)
        .then(responseFromDate => {
            if (responseFromDate.length > 0) {
               throw new Error("Date not available")
            }

            return createBookings(booking_time,stay_duration,checkin_date,checkout_date,numberof_rooms)
           
         })
        .then(createResult => {
                
            res.status(201).json({
                status:true,
                message: "Customer created"
            })

        })
        .catch(error => {
            console.log(error.message)
            res.status(400).json({
                status:false,
                message: error.message
            })
        })

    
    
} catch (error) {
    
        res.status(400).json({
            status : fasle,
            message: error.message
        })
}
   

}





module.exports = {creating , booking}