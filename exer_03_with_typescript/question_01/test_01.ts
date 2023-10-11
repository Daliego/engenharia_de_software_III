import { Autor } from "./autor";
import { Post } from "./post";
import { PostRepository } from "./postRepository";

class Teste_01 {
    public static run(): void {

        const autor: Autor = new Autor(1, "Diego", "random@gmail.com")
        
        const post: Post = new Post(1, "Esse é um texto", autor, new Date("2022-08-09"))

        PostRepository.saveToFile(post, "C:\Users\diego\Programacao\ADS_2023.2\engenharia_de_software_III\exer_03_with_typescript\question_01")
        
        PostRepository.readFile("C:\Users\diego\Programacao\ADS_2023.2\engenharia_de_software_III\exer_03_with_typescript\question_01")
    }
}

Teste_01.run()

