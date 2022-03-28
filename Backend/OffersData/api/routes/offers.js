const Offers = require('../../models/offers')

module.exports = function (router){
    //get 
    router.get('/offers', function(req,res){
        Offers.find({}, (err,offers)=>{

            if(err){
                res.json({success:false,message:err}); // return err msg
            }else{
                //
                if(!offers){
                    res.json({success:false, message: 'No offers found'});//return err msg
                }else{
                    res.json(offers);
                 // res.json({success:true, offers: offers}); // return success and offers array
                }
            }
        })
    })
    //get specific
    router.get('/offers/:_id', async(req,res)=>{
        try{
            const post = await Offers.findById(req.params._id);
            res.json(post);
        }
        catch(err){
          res.json({message : err})
        }
    })



    //post : get new meeting note document..
    router.post('/offers', function(req , res){
        let note = new Offers(req.body)
        note.save(function (err , note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


router.put('/updateOffers/:_id', (req, res)=>{
    //check if id is provided
    if(!req.body._id){
        res.json({success: false, message: "No offers is provided"}); // return error message
    }else{
        //check if id exicts in db 
        Offers.findOne({_id:req.body._id}, (err,offers)=>{
            //check if id is valid id
            if(err){
                res.json({success: false , message: 'Not a valid offers id'});

            }else{
                offers.image = req.body.image;
                offers.offer = req.body.offer;
                offers.offerdetails = req.body.offerdetails;
                offers.offercode = req.body.offercode;
                offers.validity = req.body.validity;
               
                offers.save((err)=>{
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

router.delete('/deleteOffers/:offersID',(req,res)=>{
    //check id if was provided in parameters
    if(!req.params.offersID){
        res.json({ success: false , message:'No id provided'}); //return error msg
    }else{
        //check id is found in db
        Offers.findOne({offersID: req.params.offersID},(err,offers)=>{
            //check if error was found
            if(err){
                res.json({success:false, message:'Invalid ID'});//return err msg
            }else{
                //remove the offers from db
                offers.remove((err)=>{
                    if(err){
                        res.json({success : false, message:err});//return err msg
                    }else{
                        res.json({success:true, message:'offers deleted'});// return success msg
                    }
                });
            }
        });
    }
});
}