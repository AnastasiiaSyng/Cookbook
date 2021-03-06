const router = require('express').Router();
let Recipe = require('../recipe.model');

router.route('/').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Err:' +err));
})

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const ingrediens = req.body.ingrediens;
    const directions = req.body.directions;
    const date = req.body.date;

    const newRecipe = new Recipe({
        title,
        ingrediens,
        directions,
        date,
    });

    newRecipe.save()
        .then(() => res.json('Recipe added'))
        .catch(err => res.status(400).json('Err:' +err));
})
router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id) 
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Err:' +err))
})

router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted'))
        .catch(err => res.status(400).json('Err:' +err))
})

router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe.title = req.body.title;
            recipe.ingrediens = req.body.ingrediens;
            recipe.directions = req.body.directions;
            recipe.date = req.body.date;

            recipe.save()
                .then(() => res.json("updated"))
                .catch(err => res.status(400).json('Err:' +err));
        })
        .catch(err => res.status(400).json('Err:' +err));
})


module.exports = router;
