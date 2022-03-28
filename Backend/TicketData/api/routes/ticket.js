const Ticket = require('../../models/ticket')

module.exports = function (router){
    //get 
    router.get('/ticket', function(req,res){
        Ticket.find({}, (err,ticket)=>{

            if(err){
                res.json({success:false,message:err}); // return err msg
            }else{
                //
                if(!ticket){
                    res.json({success:false, message: 'No ticket found'});//return err msg
                }else{
                    res.json(ticket);
                 // res.json({success:true, ticket: ticket}); // return success and ticket array
                }
            }
        })
    })
    //get specific
    router.get('/ticket/:_id', async(req,res)=>{
        try{
            const post = await Ticket.findById(req.params._id);
            res.json(post);
        }
        catch(err){
          res.json({message : err})
        }
    })



    //post : get new meeting note document..
    router.post('/ticket', function(req , res){
        let note = new Ticket(req.body)
        note.save(function (err , note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


router.put('/updateticket/:phno', (req, res)=>{
    //check if id is provided
    if(!req.body._id){
        res.json({success: false, message: "No ticket is provided"}); // return error message
    }else{
        //check if id exicts in db 
        Ticket.findOne({phno:req.body.phno}, (err,ticket)=>{
            //check if id is valid id
            if(err){
                res.json({success: false , message: 'Not a valid ticket id'});

            }else{
                ticket.flightID = req.body.flightID;
                ticket.flightName = req.body.flightName;
                ticket.price = req.body.price;
                ticket.arrivalTime = req.body.arrivalTime;
                ticket.departureTime = req.body.departureTime;
                ticket.arrival = req.body.arrival;
                ticket.departure = req.body.departure;
                ticket.durationTime = req.body.durationTime;
                ticket.image = req.body.image;
                ticket.email = req.body.email;
                ticket.phno = req.body.phno;
               ticket.noofpassengers = req.body.noofpassengers;
                ticket.title = req.body.title;
                ticket.fname = req.body.fname;
                ticket.lname = req.body.lname;
                ticket.title1 = req.body.title1;
                ticket.fname1 = req.body.fname1;
                ticket.lname1 = req.body.lname1;
                ticket.title2 = req.body.title2;
                ticket.fname2 = req.body.fname2;
                ticket.lname2 = req.body.lname2;
                ticket.fareprice = req.body.fareprice;
                ticket.discountedamount = req.body.discountedamount;
                ticket.totalprice = req.body.totalprice;
                
                ticket.save((err)=>{
                    if(err){
                        res.json({success : false, message: err}); //return err msg
                    }else{
                        res.json({success: true, message : 'Ticket Data Updated!'}); // return success message
                    }
                });
            }
        });
    }
});

router.delete('/deleteTicket/:_id',(req,res)=>{
    //check id if was provided in parameters
    if(!req.params._id){
        res.json({ success: false , message:'No id provided'}); //return error msg
    }else{
        //check id is found in db
        Ticket.findOne({_id: req.params._id},(err,ticket)=>{
            //check if error was found
            if(err){
                res.json({success:false, message:'Invalid ID'});//return err msg
            }else{
                //remove the ticket from db
                ticket.remove((err)=>{
                    if(err){
                        res.json({success : false, message:err});//return err msg
                    }else{
                        res.json({success:true, message:'ticket deleted'});// return success msg
                    }
                });
            }
        });
    }
});
}