// routes.js
//grabs the user model
var User = require('./models/users');

module.exports = function(app){
    //server routes
    //authentication routes
    
    app.get('app/users', function(req, res){
        //use mongoose to get users in the database
router.route('/users')
    .post(function(err){
        var user = new User(); // creates a new instance of the user
        user.name = req.body.name;
    
    //save the user and check for errors
    user.save(function(err){
        if (err)
            res.send(err);
        
        res.json({ message: 'User created' });
    });
});
//gets all the users in /users
.get(function(req, res){
    User.find(function(err, users){
        if (err)
            res.send(err);
        
        res.json(users);
    });
});
//routes that end in :user_id
router.route('/users/:user_id')
    //get the user with that id
.get(function(req, res){
   User.findById(req.params.user_id, function(err, user){
       if(err)
           res.send(err);
       res.json(user);
   }); 
})
.put(function(req, res){
    use our user model to find the user we need
    User.findById(req.params.user_id, function(err, user){
        if (err)
            res.send(err);
        
        user.name = req.body.name; // updates the user info
        // saves the user
            if (err)
                res.send(err);
        
            res.json({ message: 'User Updated'});
    });
})
// deletes the user
.delete(function(req, res ){
    User.remove({
        _id: req.params.user_id }, function(err, user){
            if (err)
                res.send(err);
                
            res.json({ message: 'Successfully deleted'});
                                             });
    });

    
    //front end routes
    // handle all angular requests
    app.get('*', function(req, res){
        res.sendfile('./public/views/index.html');
    });
    
};