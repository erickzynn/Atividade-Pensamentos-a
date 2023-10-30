// Importando o model Thought
const Thought = require("../model/Thought");

module.exports = {
    // função responsavel por renderizar a  pagina dashboard
    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true });
        return response.render("thoughts/dashboard", { thoughts });
    },

    async registerThought(request, response) {
        return response.render("thoughts/register")
    },

    // Função responsável por buscar todos os pensamentos cadastrados.
    // async findAllThoughts(request, response) {
    //     const thoughts = await Thought.findAll({ raw: true });

    //     return response.json(thoughts);
    // },

    async createThought(request, response) {
        const { title, description } = request.body
        const thought = await Thought.create({title, description});

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    },

    async findThought(request, response) {
        const { id } = request.params

        const thoughts = await Thought.findOne({ where: { id: id } });

        return response.json(thoughts);
    },

    async showPageEditThought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where:{id: id}, });
        return response.render("thoughts/edit", { thought });
    },

    async updateThought(request, response) {
        const { id } = request.params
    
        const { title, description } = request.body
    
        const thoughts = await Thought.update(
            {
                title,
                description    
            },
            {
                where: { id: id }
            }
        );

            try{
                if(thought) {
                    return response.redirect("/thoughts/dashboard");
                }
            }catch(error) {
                console.error(error);
            }
    },

    async deleteThought(request, response) {
        const { id } = request.params
    
        const thought = await Thought.destroy({ where: { id: id } });

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    }
}
