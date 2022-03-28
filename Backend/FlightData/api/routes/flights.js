const Flights = require('../../models/flights')

module.exports = function (router){
    //get 
    router.get('/flights', function(req,res){
        Flights.find({}, (err,flights)=>{

            if(err){
                res.json({success:false,message:err}); // return err msg
            }else{
                //
                if(!flights){
                    res.json({success:false, message: 'No flights found'});//return err msg
                }else{
                    res.json(flights);
                 // res.json({success:true, flights: flights}); // return success and flights array
                }
            }
        })
    })
    //get specific
    router.get('/flights/:_id', async(req,res)=>{
        try{
            const post = await Flights.findById(req.params._id);
            res.json(post);
        }
        catch(err){
          res.json({message : err})
        }
    })



    //post : get new meeting note document..
    router.post('/flights', function(req , res){
        let note = new Flights(req.body)
        note.save(function (err , note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


router.put('/updateFlights/:_id', (req, res)=>{
    //check if id is provided
    if(!req.body._id){
        res.json({success: false, message: "No flights is provided"}); // return error message
    }else{
        //check if id exicts in db 
        Flights.findOne({_id:req.body._id}, (err,flights)=>{
            //check if id is valid id
            if(err){
                res.json({success: false , message: 'Not a valid flights id'});

            }else{
                flights.flightID = req.body.flightID;
                flights.flightName = req.body.flightName;
                flights.price = req.body.price;
                flights.arrivalTime = req.body.arrivalTime;
                flights.departureTime = req.body.departureTime;
                flights.arrival = req.body.arrival;
                flights.departure = req.body.departure;
                flights.durationTime = req.body.durationTime;
                flights.image = req.body.image;
                flights.save((err)=>{
                    if(err){
                        res.json({success : false, message: err}); //return err msg
                    }else{
                        res.json({success: true, message : 'Flight Data Updated!'}); // return success message
                    }
                });
            }
        });
    }
});

router.delete('/deleteFlights/:flightID',(req,res)=>{
    //check id if was provided in parameters
    if(!req.params.flightID){
        res.json({ success: false , message:'No id provided'}); //return error msg
    }else{
        //check id is found in db
        Flights.findOne({flightID: req.params.flightID},(err,flights)=>{
            //check if error was found
            if(err){
                res.json({success:false, message:'Invalid ID'});//return err msg
            }else{
                //remove the flights from db
                flights.remove((err)=>{
                    if(err){
                        res.json({success : false, message:err});//return err msg
                    }else{
                        res.json({success:true, message:'flights deleted'});// return success msg
                    }
                });
            }
        });
    }
});
}
