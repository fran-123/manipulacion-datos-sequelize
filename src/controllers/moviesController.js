const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
            .then(movies => {
                res.render("moviesList",
                {movies})
            })
            .catch(error => console.log(error))
    },
    nueva : (req,res) => {
        db.Pelicula.findAll({order:[["release_date","DESC"]]})
        .then(movies =>{
            res.render("newestMovies",{movies})
        })
        .catch(error => console.log(error))

    },
    recommended : (req,res) => {
        db.Pelicula.findAll({
            where : {
                awards : {
                    [Op.gte] : 8
                }
            }
        })
        .then(movies =>{
            res.render("recommendedMovies",{movies})
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(movie => {
            res.render("moviesDetail",{
                movie
            })
        })
        .catch(error => console.log(error))
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
         res.render("moviesAdd")
    },
    create: function (req, res) {
        const {title,rating,awards,release_date,length} = req.body;
        db.Pelicula.create({
            title : title.trim(),
            rating,
            awards,
            release_date,
            length
        })
        .then(movie =>{
            res.redirect("/movies/detail/" + movie.id)
        })
        .catch(error => console.log(error))
    },
    edit: function(req, res) {
        db.Pelicula.findByPk(req.params.id)
        .then(Movie =>{
            res.render("moviesEdit",{Movie})
        })
        .catch(error => console.log(error))
    },
    update: function (req,res) {
        const {title,rating,awards,release_date,length} = req.body;
        db.Pelicula.update({
            title : title.trim(),
            rating,
            awards,
            release_date,
            length
        },
        {
            where : {
                id : req.params.id
            }
        }
        )
        .then(res.redirect("/movies"))
        .catch(error => console.log(error))
        
    },
    suprim: function (req, res) {
        db.Pelicula.findByPk(req.params.id)
        .then(Movie=>{
            res.render("moviesDelete",{Movie})
        })
        .catch(error => console.log(error))
    },
    destroy: function (req, res) {
        db.Pelicula.destroy({
            where : {id : req.params.id}
        })
        .then(() => res.redirect("/movies"))
        .catch(error => console.log(error))
    }

}