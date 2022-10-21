const connection = require(`./connection`)
const { v4: uuidv4 } = require('uuid');


const createCustomers = (firstname,othernames,email,phone) => {
    
    const customer_id = uuidv4()
    return new Promise((resolve,reject) => {
       connection.query(`INSERT INTO customers(customers_id,firstname,othernames,email,phone) +
       VALUE("${customers_id}","${firstname}","${othernames}","${email}","${phone}" )`),
       (err,results,fields) => {
        if(err) reject(err)
        resolve (results)
       }
})

        connection.end()

}
const getAllCustomers = () => {

    return new Promise((resolve, reject) => {
         connection.query('SELECT * FROM bookings',
            (err, results, fields) => {
                if (err) reject(err)
                resolve(results)

            })
        })
    
  
    
}

const createBookings = (booking_time,stay_duration,checkin_date,checkout_date,numberof_rooms) => {
    
    
    return new Promise((resolve,reject) => {
       connection.query(`INSERT INTO bookings(customers_id,firstname,othernames,email,phone) +
       VALUE("${booking_time}","${stay_duration}","${checkin_date}","${checkout_date}","${numberof_rooms}")`),
    
       (err,results,fields) => {
        if(err) reject(err)
        resolve (results)
       }
    })
   
        connection.end()

}  





module.exports = {createCustomers ,getAllCustomers, createBookings }